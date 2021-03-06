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
package com.logicalis.eugenio.eugenioshowcase.dtos;

import com.logicalis.eugenio.client.api.auth.dtos.EugenioLoginDTO;

public class EugenioCompleteInfoAccessDTO {

	private String apiKey;
	private EugenioLoginDTO login;

	public String getApiKey() {
		return apiKey;
	}

	public void setApiKey(String apiKey) {
		this.apiKey = apiKey;
	}

	public EugenioLoginDTO getLogin() {
		return login;
	}

	public void setLogin(EugenioLoginDTO login) {
		this.login = login;
	}

}
