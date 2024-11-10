# README

This is my submission for Margera's React & Data Engineering exercise. You can preview the app, deployed on Vercel: 

https://mergera-weather-exc.vercel.app/

You can access the API surfaced as follows:

**List the latest forecast for each location for every day**

```bash
curl --location 'https://mergera-weather-exc.vercel.app/api/forecasts/weekly' \
--header 'Content-Type: application/json' \
--data '{
    "country_1": "greenland", "country_2": "greece", "country_3": "guadeloupe"
}'
```

**List the average the_temp of the last 3 forecasts for each location for every day**

```bash
curl --location 'https://mergera-weather-exc.vercel.app/api/forecasts/weekly-avg' \
--header 'Content-Type: application/json' \
--data '{
    "country_1": "greenland", "country_2": "greece", "country_3": "guadeloupe"
}'
```

**Get the top n locations based on each available metric where n is a parameter given to the API call**

```bash
curl --location 'https://mergera-weather-exc.vercel.app/api/forecasts/avg?n=10'
```

## Architectural approach: Stack

Given the prerequisites for a React application that would consume a weather API and then leverage a custom API that would store and retrieve data from a relational database, I went with the NextJS (App router) fullstack framework. I built a mini-fullstack application that uses the [shadcn] (https://ui.shadcn.com/) UI library for its user interface and data presentation, including forms and charts. I used NextJS [route handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) to leverage the API for external usage and MySQL for my DB.

I used [aiven](https://aiven.io/) MySQL instance provider to set up a MySQL instance. You can connect to it with (credentials on mail):

`mysql --user <username> --password=<password> --host mysql-3be5b9fe-mergera-test.b.aivencloud.com --port 21952`

If you wanna set up a custom SQL instance, just make sure that there's a present table:

```sql
CREATE TABLE WEATHER_DATA (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    temperature FLOAT,
    recorded_date VARCHAR(30),
    recorded_time VARCHAR(30)
);
```

## Relevant key decisions I made 

Given the 2-day margin I had for the task completion, I favored a horizontal implementation that would include and integrate various services and libraries so that I could showcase my skillset.
across fullstack fonts, while also highlighting the usage of the React framework to build a short dashboard/analytics-like webpage that would possibly be of use in Margera's case. For this reason, code readability, componentization, and other good practices have some room for improvement.

For the task specification, I found a certain level of ambiguity, so I took some sort of initiative. To be more precise, a user can select 3 countries and will get, as a result, 7-day temperature forecasts, with 3 forecasts per day. Then it is showcased the average temperature for each location for every day. Those forecast data are stored in MySQL and can be retrieved through the exported API. A user can get the top n locations on the available metric of average temperature that spans across all available forecast data for each location, stored throughout the app's lifecycle. Given a
real-life scenario, those kinds of ambiguities would be taken into consideration with thorough question sessions.

## Problems I ran into

I initially went with GCP's MySQL cloud instance, but there were some obscure issues with my database being deleted randomly, so I went with aiven.

## Development Preview

This is a [Next.js](https://nextjs.org) project bootstrapped with ['create-next-app'](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

    I will attach a.env file to the email.
