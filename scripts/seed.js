// Initialize the database and populate data

// Log into the db to get started
db = db.getSiblingDB("admin");
db.auth("admin", "secretpassword");

// Create a new database for our app
db = db.getSiblingDB("app");

// Create a collection for storing vendors
db.createCollection("vendors");

// Create a collection for storing users
db.createCollection("users");

// Create a collection for storing vendor ratings
db.createCollection("ratings");

// Create a collection for storing user favorites
db.createCollection("favorites");

/*
  locationId
  name
  facilityType
  locationDescription
  foodItems
  latitude
  longitude
  daysHours
*/