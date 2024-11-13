export interface Consumer<TEvent> {
  consume(event: TEvent): Promise<void>;
}
