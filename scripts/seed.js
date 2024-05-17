// Initialize the database and populate data

// Log into the db to get started
db = db.getSiblingDB("admin");
db.auth("admin", "secretpassword");

// Create a new database for our app
db = db.getSiblingDB("app");

// Create an API user that can read and write to the app database and its collections
db.createUser({
  user: "api",
  pwd: "supersecretpassword",
  roles: [
    {
      role: "readWrite",
      db: "app",
    },
  ],
});

// Create a collection for storing vendors
db.createCollection("vendors");

// Create a collection for storing users
db.createCollection("users");

// Create a collection for storing vendor ratings
db.createCollection("vendor_ratings");

// Create a collection for storing user favorites
db.createCollection("favorites");

/*
    Vendors:
        vendorId: uuid
        LocationId          int32   `csv:"locationid"`
        Applicant           string  `csv:"Applicant"`
        FacilityType        string  `csv:"FacilityType"`
        Cnn                 int32   `csv:"-"`
        LocationDescription string  `csv:"LocationDescription"`
        Address             string  `csv:"Address"`
        Blocklot            int32   `csv:"-"`
        Block               int32   `csv:"-"`
        Lot                 int32   `csv:"-"`
        Permit              string  `csv:"permit"`
        Status              string  `csv:"Status"`
        FoodItems           string  `csv:"FoodItems"`
        X                   float32 `csv:"-"`
        Y                   float32 `csv:"-"`
        Latitude            float64 `csv:"Latitude"`
        Longitude           float64 `csv:"Longitude"`
        Schedule            string  `csv:"Schedule"`
        DaysHours           string  `csv:"dayshours"`
        Noisent             string  `csv:"-"`
        Approved            string  `csv:"Approved"`
        Received            int32   `csv:"Received"`
        PriorPermit         int32   `csv:"-"`
        ExpirationDate      string  `csv:"ExpirationDate"`
        Location            string  `csv:"-"`
*/

/*
    Users:
        userId: string (uuid)
        firstName: string
        lastName: string
        email: string
        password: string
*/

/*
    Ratings:
        userId: uuid
        vendorId: uuid
        rating: enum (1-5)
*/

/*
    Favorites:
        userId: uuid
        vendorId: uuid
*/
