package com.logicalis.eugenio.eugenioshowcase.controller;

import javax.ws.rs.QueryParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.ResponseBody;

import com.logicalis.eugenio.eugenioshowcase.service.EugenioDataQueryService;

@Controller
public class EugenioDataQueryController {

	@Autowired
	private EugenioDataQueryService eugenioDataQueryService;

	@GetMapping("/api/query")
	@ResponseBody
	public ResponseEntity<?> get(@QueryParam("query") String query, @RequestHeader("ApiKey") String apiKey) {
		return ResponseEntity.ok(eugenioDataQueryService.findTopTen(query, apiKey));
	}

}
