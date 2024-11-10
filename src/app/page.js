"use client";

import { useState } from "react";
import ForecastChart from "@/components/ForecastChart";
import SelectCountriesForm from "@/components/SelectCountiresForm";
import FilterMetrics from "@/components/FilterMetrics";

export default function Home() {
   const [weatherData, setWeatherData] = useState(null);
   const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = async (data) => {
      try {
         setIsLoading(true);
         const response = await fetch(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}/api/forecasts`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: data,
         });

         const result = await response.json();

         setWeatherData(result);
         setIsLoading(false);
      } catch (error) {
         console.error("Error:", error);
      }
   };

   return (
      <div
         className="p-4 font-[family-name:var(--font-geist-sans)]"
         suppressHydrationWarning
      >
         <main className="flex flex-col gap-10 items-center w-full min-h-screen">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
               Mergera Data & React Engineer Excercise
            </h1>

            <SelectCountriesForm handleSubmit={handleSubmit} />
            {isLoading && "..."}
            {weatherData && !isLoading && (
               <>
                  <ForecastChart
                     chartData={weatherData.forecastPerLocationData}
                     countriesSelected={weatherData.countries}
                     chartTitle={"Temperature Forecast"}
                     chartDescritpion={"For the next 7 days"}
                  />
                  <ForecastChart
                     chartData={weatherData.avgForecastPerLocationData}
                     countriesSelected={weatherData.countries}
                     chartTitle={"Avg Temperature Forecast"}
                     chartDescritpion={"For the next 7 days"}
                  />
               </>
            )}
            <FilterMetrics />
         </main>
      </div>
   );
}
