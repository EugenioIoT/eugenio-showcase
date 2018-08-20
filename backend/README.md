# Eugenio Showcase Web Application Back-End

##About
This is a sample of how to build an application using Eugenio Api. In this application you can see the examples below.

* Auth Api informing username, password, organization and api key
* An interface to use Ingestion Api
* An interface to use Query Api
* An interface to use Things Invoke Api

##Instructions
###How to build application
First of all you need set the value of property "eugenio.uri" in src/main/resources/application.properties. This property is setted with the base of uri address to use Eugenio Api. Then run the command line below.

```
mvn install
```

To understand how to config spring beans of the abstraction of Eugenio Api in a web application, see /eugenio-showcase/src/main/java/com/logicalis/eugenio/eugenioshowcase/config/EugenioShowCaseConfig.java.
