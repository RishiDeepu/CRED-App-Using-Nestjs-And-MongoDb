import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Employee } from "./employee.interface";
// import { Employee } from "./employee.model";
import { RepositoryCollection } from "./repositoryIndex";

@Injectable()
export class EmployeeService {
  constructor(
    // @InjectModel('employee') public readonly employeeModel:Model<Employee>
    private readonly repo:RepositoryCollection
    ){}

  async createEmployee(emp:any){
    let data= await this.repo.employeeModel.create(emp)
    console.log(data);
    
    return data;
  }

  async findEmploye(){
    return await this.repo.employeeModel.find();
  }

  async findOne(id:string){
    let singleData= await this.repo.employeeModel.findOne({
      _id:id
    });
    return singleData;
  }

  async delete(id:string){
    let data= await this.repo.employeeModel.deleteOne({
      _id:id
    })
    return {message:`Data Deleted with id ${id}`}

  }

  update(id:string,empdat:any){
    // let findData=this.data.find((e)=>e.id==id);
    // if(!findData){
    //   throw new NotFoundException("Invalid Id"); 
    // }
    // if(empdat.name){
    //   findData.name=empdat.name
    // }
    // if(empdat.age){
    //   findData.age=empdat.age
    // }
    // if(empdat.refNo){
    //   findData.refNo=empdat.refNo
    // }

    let findData= this.repo.employeeModel.findByIdAndUpdate(id,empdat,{new:true})

    return findData;
  }

}