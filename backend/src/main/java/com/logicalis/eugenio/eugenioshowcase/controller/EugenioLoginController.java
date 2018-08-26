/*
 * Copyright (c) 2018 Logicalis S/A.
 * 
 * This file is part of eugenio-showcase
 * (see https://github.com/EugenioIoT).
 * 
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
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
