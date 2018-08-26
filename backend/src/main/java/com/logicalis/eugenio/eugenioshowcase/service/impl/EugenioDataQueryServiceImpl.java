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
package com.logicalis.eugenio.eugenioshowcase.service.impl;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.logicalis.eugenio.client.api.query.DataQueryRequest;
import com.logicalis.eugenio.client.api.query.EugenioQueryApiClient;
import com.logicalis.eugenio.client.api.query.dtos.EugenioQueryResponseDTO;
import com.logicalis.eugenio.eugenioshowcase.service.EugenioDataQueryService;

@Service
public class EugenioDataQueryServiceImpl implements EugenioDataQueryService {

	@Autowired
	private EugenioQueryApiClient eugenioQueryApiClient;

	@Override
	public List<EugenioQueryResponseDTO> findTopTen(String query, String apiKey) {
		DataQueryRequest request = new DataQueryRequest();
		request.setApiKey(apiKey);
		request.setQuery(query);
		List<EugenioQueryResponseDTO> list = eugenioQueryApiClient.get(EugenioQueryResponseDTO.class, request);
		if (list != null && list.size() > 10) {
			list = list.stream().limit(BigDecimal.TEN.intValue()).collect(Collectors.toList());
		}
		return list;
	}

}
