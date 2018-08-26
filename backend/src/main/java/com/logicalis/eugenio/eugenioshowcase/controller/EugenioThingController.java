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

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.logicalis.eugenio.client.api.thing.EugenioThingApiClient;
import com.logicalis.eugenio.client.api.thing.dtos.EugenioGetThingsRespDTO;
import com.logicalis.eugenio.client.api.thingsinvoke.EugenioThingsInvokeApiClient;
import com.logicalis.eugenio.client.api.thingsinvoke.dtos.EugenioThingsInvokeDTO;
import com.logicalis.eugenio.eugenioshowcase.util.EugenioHeaderUtil;

@Controller
public class EugenioThingController {

	@Autowired
	private EugenioThingApiClient eugenioThingApiClient;
	@Autowired
	private EugenioThingsInvokeApiClient eugenioThingsInvokeApiClient;
	@Autowired
	private EugenioHeaderUtil eugenioHeaderUtil;

	@GetMapping("/api/things")
	@CrossOrigin("*")
	@ResponseBody
	public List<EugenioGetThingsRespDTO> getAll() {
		return eugenioThingApiClient.getAllThings(eugenioHeaderUtil.getEugenioHeaders());
	}

	@PostMapping("/api/things/{deviceId}/invoke")
	@CrossOrigin("*")
	@ResponseBody
	public ResponseEntity<?> postThingsInvoke(@PathVariable String deviceId,
			@RequestBody EugenioThingsInvokeDTO eugenioThingsInvokeDTO) {
		eugenioThingsInvokeApiClient.postInvoke(deviceId, eugenioThingsInvokeDTO,
				eugenioHeaderUtil.getEugenioHeaders());
		return ResponseEntity.ok().build();
	}

}
