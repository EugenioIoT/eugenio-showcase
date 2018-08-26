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
package com.logicalis.eugenio.eugenioshowcase.util;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

import com.logicalis.eugenio.client.api.common.EugenioHeaders;

@Component
@RequestScope
public class EugenioHeaderUtil {

	private static final String AUTHORIZATION = "Authorization";
	private static final String TENANT = "Tenant";
	private static final String APIKEY = "ApiKey";

	@Autowired
	private HttpServletRequest request;

	public String getToken() {
		return request.getHeader(AUTHORIZATION);
	}

	public String getTenant() {
		return request.getHeader(TENANT);
	}

	public String getApiKey() {
		return request.getHeader(APIKEY);
	}

	public EugenioHeaders getEugenioHeaders() {
		EugenioHeaders eugenioHeaders = new EugenioHeaders();
		eugenioHeaders.setTenant(getTenant());
		eugenioHeaders.setToken(getToken());
		eugenioHeaders.setApiKey(getApiKey());
		return eugenioHeaders;
	}

}
