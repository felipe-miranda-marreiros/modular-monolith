import { Module } from '@nestjs/common';
import { UsersModule } from './Modules/User';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule.forRoot(), UsersModule],
})
export class AppModule {}
