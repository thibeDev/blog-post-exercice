export class Post {
  public title: string;
  public content: string;
  public loveIt: number;
  public createdAt: Date;

  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.loveIt = 0;
    this.createdAt = new Date();
  }
}
