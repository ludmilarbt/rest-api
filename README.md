# rest-api
**Rest API repository**

**ATM Rest API service**

**Objective:** 
Implement ATM machine REST API service
The service simulates ATM transaction for cashe withdrawal.
All transactions are performed in sync mode for given "ATM machine" instance, current implementation doesn't support
parallel requests

**Tecnologies, libraries**
1. NodeJs, Express,Mongoose, Inversify
2. MongoDb
3. Typescript
4. Docker, Docker Compose

**Assumptions:**
1. Refill API is in design stage, so for now we can refill the machine with the route:
	/inventory/reset
2. In actual implementation we will need acounts managing, currently it is out of the scope

3. *Important notice for ATM users:*
	*"Although it may seem an overkill, it is always advisable to count the cash received from an ATM."*

**Prerequsites:**
1. NodeJs
2. Docker

**Installation:**
1. Run `npm install` to install dependencies.
2. Run `docker-compose up -d` to get a MongoDB instance running.

**Run instructions:**
- `npm start`
- `npm run debug`
-  Postman can be used to run requests for the ATM service, see Atm.postman_collection.json, exported from Postman,
	it contains all needed requests to test service functionality.
	[See Postman export:] (https://github.com/ludmilarbt/rest-api/blob/main/Atm.postman_collection.json)

For example the following steps will be performed:
1. POST http://localhost:3000/inventory/reset - is called on service start and can be repeated when state should be reset
2. GET http://localhost:3000/inventory - is called to check inventory state
3. POST http://localhost:3000/atm/withdrawal - to withdraw by passed {"amount: 300"}
4. DEL http://localhost:3000/inventory - to delete all inventory items

**ATM service API routes:**


**Refill API**
-  Basic skeleton is added to the project’s admin module
	[See diagram:] (https://github.com/ludmilarbt/rest-api/blob/main/ATM%20System%20Class%20Diagrams.pdf)
	
- Admin routes may be implemented in this way:
		
	INVENTORY routes:
        - get `/inventory`
        - post `/inventory`
        - delete `/inventory`
        - get `/inventory/:machineId`
        - post `/inventory/:machineId`
        - post `/inventory/:machineId/state`
        - patch `/inventory/:machineId`
        - delete `/inventory/:machineId`
        

    USERS routes:
        - get `/users`
        - post `/users`
        - delete `/users`
        - users/auth/:userId
        - get `/users/:userId`
        - put `/users/:userId`
        - patch `/users/:userId`
        - delete `/users/:userId`
		
**Areas under investigation for better practices**:
1. Tests
2. Debugging
3. Logging
4. Monitoring


**Further enhancements:**
1. Productization (add support for "off-the shell" product for varius kinds of ATM machines)
2. Microserices redesign
3. Implement Refill API
4. Implement "mobile ATM" version that will perform parallel access to the service

