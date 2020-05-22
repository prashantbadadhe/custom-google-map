package com.njit.map.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
	@RequestMapping("/index")
	public String home() {
		return "index";
	}
	
	@RequestMapping("/")
	public String maps() {
		return "map";
	}
	
	@RequestMapping("/custom-map")
	public String customMap() {
		return "custom-map";
	}
}
