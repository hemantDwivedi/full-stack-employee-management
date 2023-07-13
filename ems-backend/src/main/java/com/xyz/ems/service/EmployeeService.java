package com.xyz.ems.service;

import com.xyz.ems.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto retrieveEmployeeById(Long employeeId);
    List<EmployeeDto> retrieveAllEmployees();
    EmployeeDto updateEmployee(EmployeeDto employeeDto, Long employeeId);

    void deleteEmployeeById(Long employeeId);
}
