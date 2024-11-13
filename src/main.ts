import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RabbitMQConsumer } from './Common/Infrastructure/Messaging/RabbitMQConsumer';
import { userCreatedDomainEventConsumer } from './Modules/Student/Presentation/UserCreatedDomainEventConsumer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();
  await app.listen(process.env.PORT ?? 3000);

  await RabbitMQConsumer.registerConsumer(
    userCreatedDomainEventConsumer,
    'user_queue',
  );
}
bootstrap();
