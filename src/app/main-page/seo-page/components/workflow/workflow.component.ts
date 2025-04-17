import { Component } from '@angular/core';

@Component({
  selector: 'app-workflow-seo',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss'],
})
export class WorkflowSeoComponent {
  steps = [
    {
      title: 'Анализ задач',
      content: 'Изучаем цели клиента и нужный уровень присутствия в поиске.',
    },
    {
      title: 'Оценка проекта',
      content: 'Проводим аудит и формируем запросы для продвижения.',
    },
    {
      title: 'Старт работ',
      content:
        'Разрабатываем стратегию на основе маркетингового и технического анализа.',
    },
    {
      title: 'Внутренняя оптимизация',
      content: 'Вносим улучшения в контент, структуру и код сайта.',
    },
    {
      title: 'Внешнее продвижение',
      content: 'Создаем качественную ссылочную массу, безопасную для ПС.',
    },
    {
      title: 'Улучшение сайта',
      content: 'Улучшаем UX и поведенческие факторы на основе аналитики.',
    },
    {
      title: 'Поддержка и рост',
      content:
        'Следим за метриками, вносим улучшения и ищем новые точки роста.',
    },
    {
      title: 'Отчеты и коммуникация',
      content:
        'Предоставляем понятные отчеты, фиксируем прогресс и рекомендации.',
    },
  ];

  activeIndex = 0;

  selectStep(index: number) {
    this.activeIndex = index;
  }
}
