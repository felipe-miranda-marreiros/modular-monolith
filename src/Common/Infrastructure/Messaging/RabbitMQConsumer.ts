import { connect } from 'amqplib';
import { DomainEvent } from 'src/Common/Abstrations/Domain/DomainEvent';
import { Consumer } from 'src/Common/Abstrations/Messaging/Consumer';

export class RabbitMQConsumer {
  static async registerConsumer(
    consumer: Consumer<unknown>,
    queue: 'user_queue',
  ) {
    try {
      const connection = await connect('amqp://localhost');
      const channel = await connection.createChannel();
      await channel.assertQueue(queue);
      channel.consume(
        queue,
        async (message) => {
          if (message !== null) {
            await consumer.consume(
              JSON.parse(message.content.toString()) as DomainEvent,
            );
          }
        },
        { noAck: true },
      );
    } catch (error) {
      console.log(error);
    }
  }
}
