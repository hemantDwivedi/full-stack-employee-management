package com.xyz.ems.controller;

import com.xyz.ems.dto.EmployeeDto;
import com.xyz.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {
    private EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
        return new ResponseEntity<>(employeeService.createEmployee(employeeDto), HttpStatus.CREATED);
    }
    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDto> retrieveEmployeeById(@PathVariable("id") Long employeeId){
        return ResponseEntity.ok(employeeService.retrieveEmployeeById(employeeId));
    }

    @GetMapping
    public ResponseEntity<List<EmployeeDto>> retrieveAllEmployees(){
        return ResponseEntity.ok(employeeService.retrieveAllEmployees());
    }
    @PutMapping("/{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId, @RequestBody EmployeeDto employeeDto){
        return ResponseEntity.ok(employeeService.updateEmployee(employeeDto, employeeId));
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployeeById(@PathVariable("id") Long employeeId){
        employeeService.deleteEmployeeById(employeeId);
        return ResponseEntity.ok("Employee resource deleted with id:" + employeeId);
    }
}
