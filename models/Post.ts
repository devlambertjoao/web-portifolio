export default class Post {
  id?: number;
  title: string;
  description: string;
  content: Array<string>;
  image: string;

  constructor() {
    this.title = "";
    this.description = "";
    this.content = [];
    this.image = "";
  }
}
