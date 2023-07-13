package com.xyz.ems.service.impl;

import com.xyz.ems.dto.EmployeeDto;
import com.xyz.ems.entity.Employee;
import com.xyz.ems.exception.ResourceNotFoundException;
import com.xyz.ems.mapper.EmployeeMapper;
import com.xyz.ems.repository.EmployeeRepository;
import com.xyz.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;
    private EmployeeMapper employeeMapper;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        var employee = employeeMapper.mapper().map(employeeDto, Employee.class);
        var savedEmployee = employeeRepository.save(employee);
        return employeeMapper.mapper().map(savedEmployee, EmployeeDto.class);
    }

    @Override
    public EmployeeDto retrieveEmployeeById(Long employeeId) {
        var employee = employeeRepository.findById(employeeId).orElseThrow(() -> new ResourceNotFoundException("Employee not exists with id:" + employeeId));
        return employeeMapper.mapper().map(employee, EmployeeDto.class);
    }

    @Override
    public List<EmployeeDto> retrieveAllEmployees() {
        return
                employeeRepository
                        .findAll()
                        .stream()
                        .map(emp -> employeeMapper.mapper().map(emp, EmployeeDto.class))
                        .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(EmployeeDto employeeDto, Long employeeId) {
        var employee = employeeRepository.findById(employeeId).orElseThrow(() -> new ResourceNotFoundException("Employee not exists with id:" + employeeId));
        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());
        return employeeMapper.mapper().map(employeeRepository.save(employee), EmployeeDto.class);
    }

    @Override
    public void deleteEmployeeById(Long employeeId) {
        var employee = employeeRepository.findById(employeeId).orElseThrow(() -> new ResourceNotFoundException("Employee not exists with id:" + employeeId));
        employeeRepository.delete(employee);
    }
}
