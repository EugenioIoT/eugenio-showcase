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
