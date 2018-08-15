package com.logicalis.eugenio.eugenioshowcase.controller;

import java.util.Arrays;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

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
	public ResponseEntity<?> ingestion(@RequestBody EugenioDeviceIngestionDTO deviceIngestion,
			HttpServletRequest request) {
		eugenioIngestionApiClient.postIngestion(deviceIngestion.getSchema().getName(),
				Arrays.asList(deviceIngestion.getIngestion()), eugenioHeaderUtil.getEugenioHeaders());
		return ResponseEntity.noContent().build();
	}

}
