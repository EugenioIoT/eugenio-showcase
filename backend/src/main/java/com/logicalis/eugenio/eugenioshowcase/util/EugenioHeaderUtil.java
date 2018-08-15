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
