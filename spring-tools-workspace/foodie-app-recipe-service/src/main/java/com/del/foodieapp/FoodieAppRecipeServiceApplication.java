package com.del.foodieapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableEurekaClient
public class FoodieAppRecipeServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FoodieAppRecipeServiceApplication.class, args);
	}

	@Bean
	public RestTemplate getTRestTemplateBean() {
		return new RestTemplate();
	}
	
}
