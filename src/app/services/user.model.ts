export class User {
  constructor(
    public userId: string,
    public email: string,
    private _token: string
  ) {}

  get token() {
    return this._token;
  }
}
