export interface Mockup {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'website' | 'landing' | 'ecommerce' | 'mobile';
  technologies: string[];
  link?: string;
}
