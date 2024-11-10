import countries from "@/lib/countries";
import { insertMeteoData } from "@/lib/weather-data-sql-client";
import {
   askMeteoForData,
   getAvgForecastDataForLastTripplet,
} from "@/lib/weather-facade";

// Store weather data for tripplet and return metrics
export async function POST(req) {
   // body: {country_1: <>, country_2: <>, country_3: <>}
   const body = await req.json();

   const meteoData = await askMeteoForData(body);
   await insertMeteoData(meteoData, body);

   const avgForecastData = await getAvgForecastDataForLastTripplet();

   return Response.json({
      countries: [
         countries.find((country) => country.value === body["country_1"]).label,
         countries.find((country) => country.value === body["country_2"]).label,
         countries.find((country) => country.value === body["country_3"]).label,
      ],
      avgForecastData: avgForecastData,
   });
}
