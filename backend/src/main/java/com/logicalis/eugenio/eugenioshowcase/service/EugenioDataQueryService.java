package com.logicalis.eugenio.eugenioshowcase.service;

import java.util.List;

import com.logicalis.eugenio.client.api.query.dtos.EugenioQueryResponseDTO;

public interface EugenioDataQueryService {

	List<EugenioQueryResponseDTO> findTopTen(String query, String apiKey);

}
