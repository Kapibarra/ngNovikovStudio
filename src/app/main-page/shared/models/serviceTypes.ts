export class serviceTypes {
  title: string;
  number: number;
  description: string;
  price: number;
  list: {
    listItem: string;
  }[];
  constructor(
    title: string,
    description: string,
    number: number,
    price: number,
    list: {
      listItem: string;
    }[]
  ) {
    this.title = title;
    this.description = description;
    this.number = number;
    this.price = price;
    this.list = list;
  }
}
