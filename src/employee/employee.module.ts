import { Module } from "@nestjs/common";
import { EmployeeController } from "./employee.controller";
import { EmployeeService } from "./employee.service";
import { MongooseModule } from '@nestjs/mongoose'
// import { Entities } from "./allEntities";
import { EmployeeSchema } from "./employee.model";
import { All_Entities } from "./all_entities";
import { RepositoryCollection } from "./repositoryIndex";

@Module({
  imports:[MongooseModule.forFeature([
    ...All_Entities
    // {name: 'employee',schema: EmployeeSchema}
  ])],
  controllers:[EmployeeController],
  providers:[EmployeeService,RepositoryCollection]
})
export class EmpolyeeModule{}