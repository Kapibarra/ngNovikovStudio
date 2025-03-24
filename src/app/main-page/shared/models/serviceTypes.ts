export class serviceTypes {
  title: string;
  number: number;
  description: string;
  price: number;
  tags: {
    tagsItem: string;
  }[];
  list: {
    listItem: string;
  }[];
  constructor(
    title: string,
    description: string,
    number: number,
    price: number,
    tags: {
      tagsItem: string;
    }[],
    list: {
      listItem: string;
    }[]
  ) {
    this.title = title;
    this.description = description;
    this.number = number;
    this.tags = tags;
    this.price = price;
    this.list = list;
  }
}
