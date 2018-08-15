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
