package com.logicalis.eugenio.eugenioshowcase.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.logicalis.eugenio.client.api.auth.EugenioAuthApiClient;
import com.logicalis.eugenio.client.api.auth.dtos.EugenioLoginDTO;
import com.logicalis.eugenio.client.api.auth.dtos.EugenioLoginResponseDTO;

@Controller
public class EugenioLoginController {

	@Autowired
	private EugenioAuthApiClient eugenioAuthClient;

	@PostMapping("/login")
	@CrossOrigin(origins = "*")
	@ResponseBody
	public ResponseEntity<EugenioLoginResponseDTO> login(@RequestBody EugenioLoginDTO loginDTO) {
		EugenioLoginResponseDTO response = eugenioAuthClient.login(loginDTO);
		return ResponseEntity.ok(response);
	}

}
