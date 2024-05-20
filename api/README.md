# Mobile Food Vendor API

This API is designed to be the backbone of a mobile or web application built entirely for viewing and rating food trucks and carts around San Francisco.

This API is still in its infancy. For now it allows consumers to view a list of carts and trucks in the database, and for those who register as a user of the application, they can add new carts/trucks, and update details about the carts and trucks in the database.

Future iterations of this API will provide users the following functionality:
* Refresh token
* Update user profile
* Rate vendors
* Mark vendors as favorites
* View a list of the vendors that they've rated
* View a list of the vendors that they've favorited
* Get a random vendor suggestion that can be filtered to vendors they've rated, or have not yet rated
* Access controls / user roles (control which users can add, edit, and delete vendors)

## Using the API

Basic functionality such as getting a list of vendors in the database, and viewing vendor details requires only that the API consumer make a GET call to the corresponding REST endpoint.

Any user specific functionality, and vendor functionality such as updating or removing a vendor require that consumers of the API register and/or log in to generate a valid JWT. This token must be passed as an authorization header or the request will be deemed invalid and the call will be rejected.

**NOTE:** As of this time, the API only provides a single token, which will expire after 60 minutes. As mentioned in the list of features coming in future iterations, the API will provide a refresh token so that consumers can continue to use the API without requiring another call to the `/login` endpoint to get a new/valid token.

## Endpoints

Below is a list of endpoints and sample cURL commands that can be run from a CLI to access the functionality this API provides.

### Auth/Users:

#### Register:

Registers a new user. This endpoint validates that the email address provided is unique. Attempting to create a second user with the same email will result in a failure.
```
curl --request POST \
  --url http://localhost:3000/auth/register \
  --header 'Content-Type: application/json' \
  --data '{
	"firstName": "Taco",
	"lastName": "Lover",
	"email": "ilovetacos@tacotrucks.com",
	"password": "ilovetacos!"
}'
```


#### Login:

Log in and generate a new JWT. You must first call `/register` and create a new user before using.
```
curl --request POST \
  --url http://localhost:3000/auth/login \
  --header 'Content-Type: application/json' \
  --data '{
	"email": "ilovetacos@tacotrucks.com",
	"password": "ilovetacos!"
}'
```

### Vendors:

#### List All Vendors:

Get a list of vendors in the database with a subset of fields: locationId, name, facilityType. This endpoint can provide an entire list of all vendors in the database, or as a paginated result depending on how it's called by the consumer. A future iteration of the endpoint will enforce pagination, and the ability to retrieve all vendors in a single call will be deprecated.

Entire List (Will be deprecated):
```
curl --request GET \
  --url 'http://localhost:3000/vendors'
```  

List All Vendors (Paginated):
```
curl --request GET \
  --url 'http://localhost:3000/vendors?page={PAGE_NUMBER}&limit={LIMIT}'
```


#### Details:

Get all the details about the vendor. This provides a comprehensive view of the vendor including all fields: locationId, name, facilityType, locationDescription, foodItems, latitude, longitude, daysHours.

```
curl --request GET \
  --url http://localhost:3000/vendors/vendor/12345 \
```

#### Create:

Add a new vendor to the database.
```
curl --request POST \
  --url http://localhost:3000/vendors/vendor \
  --header 'Authorization: Bearer {YOUR_JWT_GOES_HERE}' \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "The Best Taco Truck Ever",
	"locationId": "12345",
	"facilityType": "truck",
	"locationDescription": "Between 1st Ave and Anywhere St.",
	"foodItems": "Tacos, tacos, and more tacos",
	"latitude": "-123.45",
	"longitude": "123.45",
	"daysHours": "24/7/365"
}'  
```

#### Update:

Update an existing vendor.

```
curl --request DELETE \
  --url http://localhost:3000/vendors/vendor/12345 \
  --header 'Authorization: Bearer {YOUR_JWT_GOES_HERE}' \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "I should have named this differently"
}'
```

#### Delete:

Remove a vendor.
```
curl --request DELETE \
  --url http://localhost:3000/vendors/vendor/12345 \
  --header 'Authorization: Bearer {YOUR_JWT_GOES_HERE}' \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "Updated vendor name"
}'
```