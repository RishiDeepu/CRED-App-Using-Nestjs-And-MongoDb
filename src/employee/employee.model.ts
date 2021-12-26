import * as mongoose from 'mongoose'

export const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    refNo: {
      type: String
    },
    age: {
      type: Number
    }

  }
)



// export class Employee {
//   id:String
//   name:String
//   refNo:String
//   age:Number
//   constructor(id:string,name:string,refNo:string,age:number){

//     this.id=id,
//     this.name=name,
//     this.refNo=refNo,
//     this.age=age

//   }

// }