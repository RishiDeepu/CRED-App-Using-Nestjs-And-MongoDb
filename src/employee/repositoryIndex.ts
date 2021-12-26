import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Employee } from "./employee.interface";

export class RepositoryCollection{
  constructor(
    @InjectModel('work') public readonly employeeModel:Model<Employee>
  ){}
}