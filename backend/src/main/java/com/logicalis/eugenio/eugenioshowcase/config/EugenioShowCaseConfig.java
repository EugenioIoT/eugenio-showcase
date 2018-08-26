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
package com.logicalis.eugenio.eugenioshowcase.config;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import com.logicalis.eugenio.client.api.auth.EugenioAuthApiClient;
import com.logicalis.eugenio.client.api.ingestion.EugenioIngestionApiClient;
import com.logicalis.eugenio.client.api.query.EugenioQueryApiClient;
import com.logicalis.eugenio.client.api.schema.EugenioSchemaApiClient;
import com.logicalis.eugenio.client.api.thing.EugenioThingApiClient;
import com.logicalis.eugenio.client.api.thingsinvoke.EugenioThingsInvokeApiClient;

@Configuration
@PropertySource("classpath:application.properties")
public class EugenioShowCaseConfig {

	@Value("${eugenio.uri}")
	private String uri;

	@Autowired
	private Client jerseyClient;

	@Bean
	public EugenioAuthApiClient authApiClient() {
		return new EugenioAuthApiClient(uri, jerseyClient);
	}

	@Bean
	public EugenioIngestionApiClient ingestionApiClient() {
		return new EugenioIngestionApiClient(uri, jerseyClient);
	}

	@Bean
	public EugenioSchemaApiClient schemaApiClient() {
		return new EugenioSchemaApiClient(uri, jerseyClient);
	}

	@Bean
	public EugenioQueryApiClient queryApiClient() {
		return new EugenioQueryApiClient(uri, jerseyClient);
	}

	@Bean
	public EugenioThingsInvokeApiClient thingsInvokeApiClient() {
		return new EugenioThingsInvokeApiClient(uri, jerseyClient);
	}

	@Bean
	public EugenioThingApiClient thingApiClient() {
		return new EugenioThingApiClient(uri, jerseyClient);
	}

	@Bean
	public Client clientJersey() {
		return ClientBuilder.newClient();
	}

}
