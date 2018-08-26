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

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.logicalis.eugenio.client.api.common.EugenioHeaders;
import com.logicalis.eugenio.client.api.ingestion.EugenioIngestionApiClient;
import com.logicalis.eugenio.eugenioshowcase.dtos.EugenioDeviceIngestionDTO;
import com.logicalis.eugenio.eugenioshowcase.util.EugenioHeaderUtil;

@Controller
public class EugenioIngestionController {

	@Autowired
	private EugenioIngestionApiClient eugenioIngestionApiClient;
	@Autowired
	private EugenioHeaderUtil eugenioHeaderUtil;

	@PostMapping("/api/ingestion")
	@CrossOrigin("*")
	@ResponseBody
	public ResponseEntity<?> ingestion(@RequestBody EugenioDeviceIngestionDTO deviceIngestion) {
		EugenioHeaders headers = new EugenioHeaders();
		headers.setToken(eugenioHeaderUtil.getToken());
		headers.setTenant(eugenioHeaderUtil.getTenant());
		eugenioIngestionApiClient.postIngestion(deviceIngestion.getSchema().getName(),
				Arrays.asList(deviceIngestion.getIngestion()), headers);
		return ResponseEntity.noContent().build();
	}

}
