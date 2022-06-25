# Kuehne-Nagel

## Run the project
>**cd %PROJECT_LOCATION%**
>
>**docker build . -t api-service**
>
>**docker-compose up -d**

### Before sending a request to the REST API, please configure the DB
To handle this, there is a SQL script file under `sql` directory named `init.sql`.

Please run the below command in your bash to insert the mock data.
>**docker exec -it local_postgres psql postgres -h 127.0.0.1 -d postgres -f /tmp/init.sql**

### For unit testing, please run this command in your bash
> **docker exec -it local_api npm run test**

### Finally, you can send a request using this URL via browser
> http://localhost:3000/data?from=2010-01-20&to=2025-06-15

  Supported date format is [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) `YYYY-MM-DD`.
