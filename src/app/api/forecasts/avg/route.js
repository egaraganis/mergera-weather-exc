import { getAvgForecastDataInTotal } from "@/lib/weather-facade";

export async function GET(request) {
   const searchParams = request.nextUrl.searchParams;
   let n = searchParams.get("n");

   if (!n) n = 3;

   const results = await getAvgForecastDataInTotal(n);

   return Response.json(results);
}
