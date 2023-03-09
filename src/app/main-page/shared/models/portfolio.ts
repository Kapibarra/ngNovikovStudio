export class Portfolio {
  title: string;
  description: string;
  link: string;
  imgUrl: string;
  constructor(
    title: string,
    description: string,
    link: string,
    imgUrl: string
  ) {
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
    this.link = link;
  }
}
