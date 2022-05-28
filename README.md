# rest-api
Rest API repository

ATM Rest API service

Objective: 
Implement ATM machine REST API service
The service simulates ATM transaction for cashe withdrawal.
All transactions are performad in sync mode for given "ATM machine" instance, current implementation doesn't support
parralel requests

Important notice for ATM users:
"Although it may seem an overkill, it is always advisable to count the cash received from an ATM."

Assumptions:
1. Refill API is in design stage, so for now we can refill the machine with the route:
	/inventory/reset
2. In actual implementation we will need acaounts managing, currently it is out of the scope

Prerequsites:

Installation:


ATM service API routes:

Run instructions:
Postman can be used to run requests for the ATM service, seeAtm.postman_collection.json, exported from Postman,
it contains all needed requests to test service functionality.


Refill API

Feather enhancements:
Uni tests
Logging, Monitoring
Microserices redesign
Implement Refill API
Implement "mobile ATM" version that will perform parallel access to the service

