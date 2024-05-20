# food-finder

This repo provides a sample project meant to address this [engineering assessment](https://github.com/peck/engineering-assessment).

In this project you will find the building blocks of an API framework that would serve as the backbone of an application for a group of users to view, rate, and favorite mobile food vendors around San Francisco. I have provided documentation about what features are currently available in the API, and ideas of additional functionality for future iterations [here](./api/README.md).

## Project Structure

- `/api`: Contains the Nest.js API
- `/scripts/parse-vendor-file`: A simple application that retrieves the latest vendor list from [here](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat/data) and converts it into a JSON file 
- `/db/seed.js`: An init script that seeds data in the MongoDB upon execution of `docker-compose up --build`

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine.

### Building and Running the Applications

Build and start the API using Docker Compose:

   ```bash
   docker-compose up --build
   ```

### Considerations / Miscellaneous Notes

At this time neither the Nest.js API, nor the Docker setup have support for environment configuration variables. What this means to you at build time and while using the app, is that all requests must go to `http://localhost:3000`. In a future iteration this would be addressed, and all configuration such as ports and database credentials would be done through a singular configuration file.

I have included `mongo-express` as part of the deployment, and it can be accessed via `http://localhost:8081` once the container is up and running. In case you are not familiar with Mongo Express, it provides a simple web interface for viewing and interacting with data in the Mongo database. I've only included this for development purposes and if this were a production ready project, it would be removed from the deployment.

I want to call attention to the Golang parser. It is a very simple application that was designed to help me seed data in the database upon starting up the container. If this were a more complete project, this script would run as part of the composition process, and would seed data by spinning up its own container and then shutting down once complete. As time was short, instead this application simply retrieves a copy of the data from the vendor website, and converts the CSV data into a JSON object array. I limited the fields to only a handful that I thought were most relevant to the application I was building. I manually copied this JSON object array into `seed.js`, populated the data and moved on with development. Again, this is not a production ready solution, but simply a way to get going on the project.

Lastly, I would like to call attention to the data itself. When retrieving vendor data and seeding data in the database, I ignored some very critical fields. The vendor data provided by the city of San Francisco includes details such as an application date, whether the application was approved, and if the application has expired. If this were a production ready implementation, those fields would not be ignored and I would only seed the database with vendors who are approved and their permits had not yet expired. Also the date data would be stored so that vendors could be flagged if their permits had expired. Along those same lines, I would create a service that checks the vendor website on a set interval and keeps the data in this local database in sync with the data provided by the city.
