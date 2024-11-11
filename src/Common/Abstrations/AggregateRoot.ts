import { AggregateRoot as AR } from '@nestjs/cqrs';
import { v4 as uuidv4 } from 'uuid';

export abstract class AggregateRoot<T> extends AR {
  private readonly _pid: string;
  protected readonly props: T;

  protected constructor(props: T, pid?: string) {
    super();
    this._pid = pid ?? uuidv4();
    this.props = props;
  }

  get pid(): string {
    return this._pid;
  }

  get values(): T {
    return this.props;
  }
}
