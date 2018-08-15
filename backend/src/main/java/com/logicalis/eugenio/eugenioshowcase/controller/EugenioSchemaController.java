package com.logicalis.eugenio.eugenioshowcase.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.logicalis.eugenio.client.api.schema.EugenioSchemaApiClient;
import com.logicalis.eugenio.client.api.schema.dtos.EugenioSchemaDTO;
import com.logicalis.eugenio.eugenioshowcase.util.EugenioHeaderUtil;

@Controller
public class EugenioSchemaController {

	@Autowired
	private EugenioSchemaApiClient eugenioSchemaApiClient;
	@Autowired
	private EugenioHeaderUtil eugenioHeaderUtil;

 	@GetMapping("/api/schemas")
	@CrossOrigin("*")
	@ResponseBody
	public List<EugenioSchemaDTO> get() {
		return eugenioSchemaApiClient.getAllSchemas(eugenioHeaderUtil.getEugenioHeaders());
	}

}
