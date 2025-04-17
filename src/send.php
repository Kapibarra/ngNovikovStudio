<?php
// Конфигурация
$token = "ТВОЙ_БОТ_ТОКЕН";
$chat_id = "ТВОЙ_CHAT_ID";
$allowedReferer = "https://твойдомен.ру"; // Заменить на свой домен

// CORS
header('Access-Control-Allow-Origin: ' . $allowedReferer);
header('Content-Type: application/json');

// Проверка Referer (откуда пришёл запрос)
if (!isset($_SERVER['HTTP_REFERER']) || strpos($_SERVER['HTTP_REFERER'], $allowedReferer) !== 0) {
    http_response_code(403);
    echo json_encode(["success" => false, "error" => "Access denied"]);
    exit;
}

// Антифлуд: не чаще одного запроса в 10 секунд с одного IP
$ip = $_SERVER['REMOTE_ADDR'];
$lockFile = __DIR__ . '/rate-limit/' . md5($ip);
@mkdir(__DIR__ . '/rate-limit', 0755, true);

if (file_exists($lockFile)) {
    $lastRequest = file_get_contents($lockFile);
    if (time() - (int)$lastRequest < 10) {
        echo json_encode(["success" => false, "error" => "Too many requests"]);
        exit;
    }
}
file_put_contents($lockFile, time());

// Получение и валидация данных
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');

if (!$name || !$email || !$phone) {
    echo json_encode(["success" => false, "error" => "Missing fields"]);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "error" => "Invalid email"]);
    exit;
}
if (!preg_match('/^\+?\d{10,15}$/', $phone)) {
    echo json_encode(["success" => false, "error" => "Invalid phone number"]);
    exit;
}

// Формирование и отправка сообщения
$message = "📥 Новая заявка с сайта:\n";
$message .= "👤 Имя: $name\n";
$message .= "📧 Email: $email\n";
$message .= "📱 Телефон: $phone";

$url = "https://api.telegram.org/bot$token/sendMessage";

$postFields = [
    'chat_id' => $chat_id,
    'text' => $message
];

$ch = curl_init(); 
curl_setopt($ch, CURLOPT_URL, $url); 
curl_setopt($ch, CURLOPT_POST, 1); 
curl_setopt($ch, CURLOPT_POSTFIELDS, $postFields); 
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
$result = curl_exec($ch); 
curl_close($ch);

echo json_encode(["success" => true]);
