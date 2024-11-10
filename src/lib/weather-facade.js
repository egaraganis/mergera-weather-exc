import countries from "./countries";
import {
   selectAvgWeatherDataForLatestTripplet,
   selectAvgWeatherDataInTotal,
   selectWeatherDataForLatestTripplet,
} from "./weather-data-sql-client";

async function getToken() {
   try {
      const response = await fetch(
         "https://login.meteomatics.com/api/v1/token",
         {
            method: "GET",
            headers: {
               Authorization:
                  `Basic ${process.env.WEATHER_API_SECRET}`,
            },
         }
      );

      // Ensure the request was successful
      if (!response.ok) {
         throw new Error(`Request failed with status ${response.status}`);
      }

      // Parse the JSON response
      const data = await response.json();

      return data.access_token;
   } catch (error) {
      throw error;
   }
}

export async function askMeteoForData(body) {
   const coordsAsString1 = countries
      .find((country) => country.value === body["country_1"])
      .coords.join(",");
   const coordsAsString2 = countries
      .find((country) => country.value === body["country_2"])
      .coords.join(",");
   const coordsAsString3 = countries
      .find((country) => country.value === body["country_3"])
      .coords.join(",");

   const locationParameter = `${coordsAsString1}+${coordsAsString2}+${coordsAsString3}`;
   const access_token = await getToken();

   try {
      const response = await fetch(
         `https://api.meteomatics.com/todayT08:00:00ZP1W:PT8H/t_2m:C/${locationParameter}/json`,
         {
            method: "GET",
            headers: {
               Authorization: `Bearer ${access_token}`,
            },
         }
      );

      if (!response.ok) {
         throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      return data.data[0].coordinates;
   } catch (error) {
      throw error;
   }
}

export async function getForecastDataForLastTripplet() {
   const forecastData = [];
   const select_results = await selectWeatherDataForLatestTripplet();

   select_results.map((res) => {
      const datetimeLabel = res.recorded_date + "-" + res.recorded_time;

      let entry = forecastData.find(
         (item) => item.recorded_date === datetimeLabel
      );

      if (!entry) {
         entry = {
            recorded_date: datetimeLabel,
         };
         entry[res.name] = res.temperature;
         forecastData.push(entry);
      } else {
         entry[res.name] = res.temperature;
      }
   });

   return forecastData;
}

export async function getAvgForecastDataForLastTripplet() {
   const avgForecastData = [];
   const select_results = await selectAvgWeatherDataForLatestTripplet();

   select_results.map((res) => {
      const datetimeLabel = res.recorded_date;

      let entry = avgForecastData.find(
         (item) => item.recorded_date === datetimeLabel
      );

      if (!entry) {
         entry = {
            recorded_date: datetimeLabel,
         };
         entry[res.name] = res.avg;
         avgForecastData.push(entry);
      } else {
         entry[res.name] = res.avg;
      }
   });

   return avgForecastData;
}
 
export async function getAvgForecastDataInTotal(n) {
    const select_results = await selectAvgWeatherDataInTotal(n);
    
    return select_results;
}
