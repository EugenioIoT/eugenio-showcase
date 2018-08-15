const { I18n } = require('react-i18nify');

I18n.setTranslations({
  en: {
    login: {
      signIn: 'Sign in',
      username: 'Username',
      password: 'Password',
      apiKey: 'Api key',
      message: {
        errorLogin: 'Error occurred when trying to sign in'
      }
    },
    ingestion: {
      title: 'Ingestion',
      value: 'Ingestion value',
      send: 'Send',
      message: {
        errorApi: 'Error occurred when trying to send Ingestion',
        schemaApiError: 'Error occurred when trying to find Schemas',
        invalidJson: 'Invalid json to ingestion',
        invalidSchema: 'Invalid schema',
        successMessage: 'Ingestion sent with success'
      }
    },
    thingsInvoke: {
      title: 'Things invoke',
      value: 'Things invoke value',
      send: 'Send',
      message: {
        errorApi: 'Error occurred when trying to send Things invoke',
        schemaApiError: 'Error occurred when trying to find Devices',
        invalidJson: 'Invalid json to invoke',
        successMessage: 'Things invoke sent with success',
        invalidDeviceId: 'Invalid device'
      }
    },
    query: {
      title: 'Data Query',
      sql: 'Query',
      execute: 'Execute query',
      message: {
        topten: 'Only the first ten records are being shown',
        norow: 'No items',
        errorApi: 'Error when trying to execute query'
      }
    },
    command: {
      title: 'Command Device',
      text: 'Command',
      send: 'Send command'
    },
    common: {
      schema: 'Schema',
      organization: 'Organization',
      device: 'Device',
      home: 'Home',
      logout: 'Logout',
      welcome: 'Welcome to Eugenio Showcase'
    }
  }
});

I18n.setLocale('en');