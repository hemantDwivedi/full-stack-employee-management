package com.xyz.ems.mapper;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EmployeeMapper {
    @Bean
    public ModelMapper mapper(){
        return new ModelMapper();
    }
}
