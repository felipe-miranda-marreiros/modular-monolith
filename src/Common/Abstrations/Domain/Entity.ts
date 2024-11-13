import { v4 as uuidv4 } from 'uuid';

export abstract class Entity<T> {
  private readonly _pid: string;
  protected readonly props: T;

  protected constructor(props: T, pid?: string) {
    this._pid = pid ?? uuidv4();
    this.props = props;
  }

  get pid() {
    return this._pid;
  }

  get values() {
    return this.props;
  }

  equals(other?: Entity<T>): boolean {
    if (!other || !(other instanceof Entity)) return false;
    return other.pid === this._pid;
  }
}
