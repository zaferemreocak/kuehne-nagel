# Kuehne-Nagel

## Run the project
>**cd %PROJECT_LOCATION%**
>
>**docker-compose up -d**

### Before sending a request to the REST API, please configure the DB
Create a new server with the below config parameters in pgAdmin at `localhost:5050`:
>*hostname/address=**local_postgres***
*port=**5432***
*username=**postgres***
*password=**postgres***

![image](https://user-images.githubusercontent.com/46295302/175110482-b86603e1-5084-461a-8512-7c4b6456f50e.png)


### Run the below SQL parameters in an editor
```sql
CREATE TABLE IF NOT EXISTS public.kn_data
(
    id smallint NOT NULL,
    name character varying,
    code character varying,
    date date,
    CONSTRAINT kn_data_pkey PRIMARY KEY (id)
);

INSERT INTO kn_data values (1, 'Lorem ipsum', '001', '1966-05-01');
INSERT INTO kn_data values (2, 'dummy_test', '011', '1972-12-07');
INSERT INTO kn_data values (3, 'Lorem ipsum', '050', '1995-07-14');
INSERT INTO kn_data values (4, 'Lorem ipsum', '019', '2005-03-02');
INSERT INTO kn_data values (5, 'atestb', '114', '2015-03-05');
INSERT INTO kn_data values (6, 'Lorem ipsum', '020', '2015-05-17');
INSERT INTO kn_data values (7, 'Lorem ipsum', '027', '2017-07-07');
INSERT INTO kn_data values (8, 'Lorem ipsum', '024', '2018-04-01');
INSERT INTO kn_data values (9, 'xtesty', '025', '2020-11-01');
INSERT INTO kn_data values (10, 'Lorem ipsum', '337', '2020-12-31');
INSERT INTO kn_data values (11, 'TeSt', '025', '2022-10-19');
INSERT INTO kn_data values (12, 'Lorem ipsum', '660', '2022-04-25');
INSERT INTO kn_data values (13, 'Lorem ipsum', '999', '2022-05-21');
INSERT INTO kn_data values (14, 'TEST', '025', '2022-06-20');
INSERT INTO kn_data values (15, 'Lorem ipsum', '550', '2023-10-29');
```

### Finally, you can send a request using this URL via browser
> http://localhost:3000/data?from=2010-01-20&to=2025-06-15

  Supported date format is [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) `YYYY-MM-DD`.
