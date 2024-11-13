import { Injectable } from '@nestjs/common';
import { connect } from 'amqplib';
import { AggregateRoot } from 'src/Common/Abstrations/Domain/AggregateRoot';
import { Publisher } from 'src/Common/Abstrations/Messaging/Publisher';

export const UserRabbitMQPublisher_TOKEN = 'UserRabbitMQPublisher_TOKEN';

@Injectable()
export class UserRabbitMQPublisher implements Publisher {
  private readonly exchange = 'user_exchange';
  private readonly routingKey = 'user_key';
  private readonly queueKey = 'user_queue';

  async publish(aggregate: AggregateRoot<unknown>): Promise<void> {
    try {
      const connection = await connect('amqp://localhost');
      const channel = await connection.createChannel();
      await channel.assertExchange(this.exchange, 'direct');
      await channel.assertQueue(this.queueKey);
      await channel.bindQueue(this.queueKey, this.exchange, this.routingKey);

      for (const event of aggregate.getEvents()) {
        channel.publish(
          this.exchange,
          this.routingKey,
          Buffer.from(JSON.stringify(event)),
        );
      }

      aggregate.clearEvents();

      setTimeout(() => {
        connection.close();
      }, 500);
    } catch (error) {
      console.log(error);
    }
  }
}
