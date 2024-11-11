export class ChangeUsernameCommand {
  constructor(public readonly username: string) {}
}

export interface CreateUsername {
  create(command: ChangeUsernameCommand): Promise<string>;
}
