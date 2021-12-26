import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpolyeeModule } from './employee/employee.module';
import { MongooseModule } from '@nestjs/mongoose'
// import * as dotenv from 'dotenv'

@Module({
  imports: [EmpolyeeModule, MongooseModule.forRoot('mongodb://localhost/CrudDB')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
