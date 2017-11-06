# Test Plan
This version doesn't include automated unit tests, however I've included a postman collection to help test the api.

This is a v2 collection, and can be loaded in the current version of Postman. See https://www.getpostman.com/

## Limitations of testing
  * This application has not been tested on a Windows environment, only a Linux environment
  * There are no unit tests as of yet
  * There are no load or stress tests as of yet
  * There has been no documented User Acceptance Testing as of yet

## Testing roadmap

## Add unit tests for model
  * Unit tests could be added to advance code coverage for models/keyvaluepair.js
  * Recommended frameworks would be chai and mocha

## Add unit tests for API backend
  * Unit tests could be added to advance code coverage for routes/api/keyvalue.js and for front end API testing.
  * On the back end, recommended frameworks would be Chai, Mocha and SuperAgent
  * Front end testing could be done with any number of API clients but Postman is recommended since there's already a collection ready

## Add unit tests for front end GUI
  * Unit tests could be added to advance code coverage for public/js/keyvaluemanager.js
  * On the front end, a testing framework like Solenium could be used to automate GUI interactions and pack as them as unit tests
  * Client side scripts could also be tested in this way
