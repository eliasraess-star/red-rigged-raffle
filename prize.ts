
export class Prize {
  constructor(
    private _name: string,
    private _quantity: number,
  ) {}

  public get name(): string {
    return this._name;
  }

  public get quantity(): number {
    return this._quantity;
  }

  public set quantity(value: number) {
    this._quantity = value;
  }
}
