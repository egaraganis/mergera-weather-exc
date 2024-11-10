const mysql = require("serverless-mysql")({
   library: require('mysql2'),
   config: {
      host: process.env.SQL_HOST,
      port: process.env.SQL_PORT,
      database: process.env.SQL_DATABASE,
      user: process.env.SQL_USER,
      password: process.env.SQL_PASSWORD,
   },
});

function extractDateTime(isoString) {
   const dateObj = new Date(isoString); // Create a Date object from the ISO string

   const date = dateObj.toISOString().split("T")[0]; // Extract the date part (YYYY-MM-DD)

   const time = dateObj.toISOString().split("T")[1].slice(0, 8); // Extract the time part (HH:MM:SS)

   return { date, time };
}

export async function insertMeteoData(meteoData, countriesSelected) {
   const query = `
    INSERT INTO WEATHER_DATA (name, temperature, recorded_date, recorded_time) VALUES ${meteoData[0].dates
       .map(
          (dataForLocation) =>
             `('${countriesSelected["country_1"]}',${dataForLocation.value}, '${
                extractDateTime(dataForLocation.date).date
             }', '${extractDateTime(dataForLocation.date).time}')`
       )
       .join(",")},${meteoData[1].dates
      .map(
         (dataForLocation) =>
            `('${countriesSelected["country_2"]}',${dataForLocation.value}, '${
               extractDateTime(dataForLocation.date).date
            }', '${extractDateTime(dataForLocation.date).time}')`
      )
      .join(",")}, ${meteoData[2].dates
      .map(
         (dataForLocation) =>
            `('${countriesSelected["country_3"]}',${dataForLocation.value}, '${
               extractDateTime(dataForLocation.date).date
            }', '${extractDateTime(dataForLocation.date).time}')`
      )
      .join(",")}`;

   await mysql.transaction().query(query).commit();
}

export async function selectWeatherDataForLatestTripplet() {
   let results = await mysql.query("SELECT * FROM WEATHER_DATA");

   // await mysql.end(); // clean up function

   return results;
}

export async function selectAvgWeatherDataForLatestTripplet() {
   let results = await mysql.query(
      "SELECT name, recorded_date, AVG(temperature) as avg FROM (SELECT name, recorded_date, temperature FROM WEATHER_DATA ORDER BY id DESC LIMIT 67) AS limited_data GROUP BY name, recorded_date ORDER BY recorded_date asc"
   );

   // await mysql.end(); // clean up function

   return results;
}

export async function selectAvgWeatherDataInTotal(n) {
   let results = await mysql.query(`SELECT name, avg(temperature) as avg_temp FROM WEATHER_DATA GROUP BY name ORDER BY avg_temp DESC LIMIT ${n}`);

   // await mysql.end(); // clean up function

   return results;
}
