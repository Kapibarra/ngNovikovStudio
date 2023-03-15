export class Service {
  title: string;
  number: number;
  description: string;
  isHovered: boolean;

  constructor(
    title: string,
    description: string,
    number: number,
    isHovered: boolean
  ) {
    this.title = title;
    this.description = description;
    this.number = number;
    this.isHovered = isHovered;
  }
}
