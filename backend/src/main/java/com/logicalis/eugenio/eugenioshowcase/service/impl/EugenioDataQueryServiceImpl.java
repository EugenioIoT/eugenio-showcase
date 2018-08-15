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
