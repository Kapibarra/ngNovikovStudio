export class Service {
  title: string;
  number: number;
  description: string;

  constructor(title: string, description: string, number: number) {
    this.title = title;
    this.description = description;
    this.number = number;
  }
}
