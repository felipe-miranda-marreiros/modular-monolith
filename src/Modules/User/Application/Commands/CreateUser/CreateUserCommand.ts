export class CreateUserCommand {
  constructor(
    public readonly username: string,
    public readonly password: string,
  ) {}
}

export interface CreateUser {
  create(command: CreateUserCommand): Promise<string>;
}
