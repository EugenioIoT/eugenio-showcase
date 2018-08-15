package com.logicalis.eugenio.eugenioshowcase.dtos;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.logicalis.eugenio.client.api.ingestion.dtos.EugenioIngestionDTO;
import com.logicalis.eugenio.client.api.schema.dtos.EugenioSchemaDTO;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({ "thing", "ingestions" })
public class EugenioDeviceIngestionDTO {

	private EugenioSchemaDTO schema;
	private EugenioIngestionDTO ingestion;

	public EugenioSchemaDTO getSchema() {
		return schema;
	}

	public void setSchema(EugenioSchemaDTO schema) {
		this.schema = schema;
	}

	public EugenioIngestionDTO getIngestion() {
		return ingestion;
	}

	public void setIngestion(EugenioIngestionDTO ingestion) {
		this.ingestion = ingestion;
	}

}
