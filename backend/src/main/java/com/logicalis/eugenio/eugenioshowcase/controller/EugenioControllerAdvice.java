package com.logicalis.eugenio.eugenioshowcase.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import com.logicalis.eugenio.client.api.common.dtos.EugenioErrorResponse;
import com.logicalis.eugenio.client.exception.EugenioApiException;
import com.logicalis.eugenio.client.exception.EugenioUserUnloggedException;

@ControllerAdvice
public class EugenioControllerAdvice {

	@ExceptionHandler(EugenioApiException.class)
	@ResponseBody
	public ResponseEntity<EugenioErrorResponse> handlerApiException(EugenioApiException ex) {
		return ResponseEntity.status(ex.getResponse().getStatus()).body(ex.getErrorMessage());
	}

	@ExceptionHandler(EugenioUserUnloggedException.class)
	@ResponseBody
	public ResponseEntity<?> handlerUserUnloggedException(EugenioUserUnloggedException ex) {
		return ResponseEntity.status(HttpStatus.FORBIDDEN).body(ex.getMessage());
	}

}
