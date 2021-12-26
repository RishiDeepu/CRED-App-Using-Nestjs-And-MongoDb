import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateEmployeeDto } from "./createEmployee.dto";
import { EmployeeService } from "./employee.service";
import { UpdateEmployeeDto } from "./updateEmployee.dto";

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) { }

  @Post('addemployee')
  addEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.createEmployee(createEmployeeDto)
  }

  @Get()
  getEmployee() {
    console.log("inside get");
    return this.employeeService.findEmploye()
  }

  @Get(":id")
  findOneEmployee(@Param("id") empId: string) {
    return this.employeeService.findOne(empId);
  }

  @Delete(':id')
  removeEmployee(@Param("id") empId: string) {
    return this.employeeService.delete(empId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(id, updateEmployeeDto)
  }

}