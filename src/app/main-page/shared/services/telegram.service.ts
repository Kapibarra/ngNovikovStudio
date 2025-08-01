import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface TelegramCalculatorData {
  phone: string;
  title: string;
  basePrice: number;
  fixedOptions: string[];
  selectedOptions: Array<{ name: string; price: number }>;
  totalPrice: number;
}

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  private readonly botToken = environment.telegram.botToken;
  private readonly apiUrl = `https://api.telegram.org/bot${this.botToken}`;
  private readonly chatId = environment.telegram.chatId;

  constructor(private http: HttpClient) {}

  sendCalculatorRequest(data: TelegramCalculatorData): Observable<any> {
    // Chat_id настроен правильно, убираем проверку

    const message = this.formatCalculatorMessage(data);

    // Отладочная информация
    console.log('Сформированное сообщение:', message);
    console.log('Длина сообщения:', message.length);
    console.log('Chat ID:', this.chatId);

    if (!message || message.trim().length === 0) {
      throw new Error('❌ Сообщение пустое! Проверьте данные формы.');
    }

    const body = {
      chat_id: this.chatId,
      text: message,
      // Временно убираем HTML форматирование для тестирования
      // parse_mode: 'HTML',
    };

    console.log('Отправляемое тело запроса:', body);

    return this.http.post(`${this.apiUrl}/sendMessage`, body);
  }

  private formatCalculatorMessage(data: TelegramCalculatorData): string {
    const selectedOptionsText = data.selectedOptions
      .map(
        (option) => `${option.name} (+${option.price.toLocaleString()} руб.)`
      )
      .join('\n');

    // Форматируем телефон для красивого отображения
    const formattedPhone = data.phone.startsWith('+7')
      ? data.phone
      : `+7 ${data.phone}`;

    return (
      `🚀 Новая заявка на ${data.title}!\n\n` +
      `📱 Телефон: ${formattedPhone}\n` +
      `💰 Базовая стоимость: ${data.basePrice.toLocaleString()} руб.\n\n` +
      `📋 Включено в базовую стоимость:\n${data.fixedOptions
        .map((option) => `✅ ${option}`)
        .join('\n')}\n\n` +
      (selectedOptionsText
        ? `🎯 Дополнительные опции:\n${selectedOptionsText}\n\n`
        : '') +
      `💵 Итоговая стоимость: ${data.totalPrice.toLocaleString()} руб.`
    );
  }

  // Метод для получения обновлений (для тестирования)
  getUpdates(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getUpdates`);
  }

  // Метод для получения информации о боте
  getBotInfo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getMe`);
  }

  // Геттеры для токена и chat ID
  getBotToken(): string {
    return this.botToken;
  }

  getChatId(): string {
    return this.chatId;
  }

  // Метод для отправки простых сообщений (для форм обратной связи)
  sendContactMessage(
    name: string,
    email: string,
    phone: string
  ): Observable<any> {
    const message = this.formatContactMessage(name, email, phone);

    const body = {
      chat_id: this.chatId,
      text: message,
    };

    return this.http.post(`${this.apiUrl}/sendMessage`, body);
  }

  private formatContactMessage(
    name: string,
    email: string,
    phone: string
  ): string {
    return (
      `📞 Новая заявка с сайта!\n\n` +
      `👤 Имя: ${name}\n` +
      `📧 Email: ${email}\n` +
      `📱 Телефон: ${phone}\n\n` +
      `⏰ Время: ${new Date().toLocaleString('ru-RU')}`
    );
  }
}
