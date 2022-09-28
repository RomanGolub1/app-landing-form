export class User {
  constructor(
    public id: number,
    public name: string | null,
    public company: string | null,
    public phone: number | null,
    public email: string | null,
    public message: string | null,
  ) {
  }
}
