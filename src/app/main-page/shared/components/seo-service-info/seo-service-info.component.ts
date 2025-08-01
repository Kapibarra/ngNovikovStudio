import { Component, Input, OnInit } from '@angular/core';
import { IconType } from './icon-3d/icon-3d.component';

export interface ServiceFeature {
  icon: string;
  iconType?: IconType; // Добавляем новое поле для 3D иконок
  title: string;
  description: string;
}

export interface ServiceInfo {
  title: string;
  subtitle: string;
  description: string;
  features: ServiceFeature[];
  price: {
    from: number;
    currency: string;
  };
  deliveryTime: string;
  ctaText: string;
}

@Component({
  selector: 'app-seo-service-info',
  templateUrl: './seo-service-info.component.html',
  styleUrls: ['./seo-service-info.component.scss'],
})
export class SeoServiceInfoComponent implements OnInit {
  @Input() serviceData: ServiceInfo = {
    title: 'Лендинг',
    subtitle: 'Продающие одностраничные сайты',
    description:
      'Создаем эффективные лендинги, которые конвертируют посетителей в клиентов. Современный дизайн, быстрая загрузка и продуманная структура для максимального результата.',
    features: [
      {
        icon: '🎯',
        iconType: 'target',
        title: 'Высокая конверсия',
        description: 'Продуманная структура и UX для максимальной конверсии',
      },
      {
        icon: '📱',
        iconType: 'mobile',
        title: 'Адаптивность',
        description: 'Идеально отображается на всех устройствах',
      },
      {
        icon: '⚡',
        iconType: 'lightning',
        title: 'Быстрая загрузка',
        description: 'Оптимизация скорости загрузки для лучшего SEO',
      },
      {
        icon: '📈',
        iconType: 'chart',
        title: 'SEO-готовность',
        description: 'Настроенная структура для поисковых систем',
      },
    ],
    price: {
      from: 25000,
      currency: 'руб.',
    },
    deliveryTime: '7-14 дней',
    ctaText: 'Заказать лендинг',
  };

  @Input() isReversed: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // Метод для получения типа иконки на основе эмодзи
  getIconType(feature: ServiceFeature): IconType {
    if (feature.iconType) {
      return feature.iconType;
    }

    // Fallback маппинг для эмодзи
    const emojiToIconMap: { [key: string]: IconType } = {
      '🎯': 'target',
      '📱': 'mobile',
      '⚡': 'lightning',
      '📈': 'chart',
      '🔐': 'security',
      '🛒': 'shopping',
      '📊': 'admin',
      '🏢': 'building',
    };

    return emojiToIconMap[feature.icon] || 'target';
  }
}
