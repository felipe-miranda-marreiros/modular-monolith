import { connect } from 'amqplib';
import { DomainEvent } from 'src/Common/Abstrations/Domain/DomainEvent';
import { Consumer } from 'src/Common/Abstrations/Messaging/Consumer';

export class RabbitMQConsumer {
  static async registerConsumer(
    consumers: Consumer<unknown> | Consumer<unknown>[],
    queue: 'user_queue',
  ) {
    try {
      const connection = await connect('amqp://localhost');
      const channel = await connection.createChannel();
      await channel.assertQueue(queue);
      channel.consume(queue, async (message) => {
        if (message === null) return;
        const event = JSON.parse(message.content.toString()) as DomainEvent;
        if (Array.isArray(consumers)) {
          for (const consumer of consumers) {
            await consumer.consume(event);
            channel.ack(message);
          }
        } else {
          await consumers.consume(event);
          channel.ack(message);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
}
