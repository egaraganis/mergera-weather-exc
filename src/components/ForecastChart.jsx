"use client"

import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import countries from "@/lib/countries"

function ForecastChart({chartTitle, chartDescritpion, countriesSelected, chartData}) {

  const country1 = countries.find(country => country.label == countriesSelected[0])
  const country2 = countries.find(country => country.label == countriesSelected[1])
  const country3 = countries.find(country => country.label == countriesSelected[2])
  
  const chartConfig = {
    [country1.value]: {
      label: country1.label,
      color: "hsl(var(--chart-1))",
    },
    [country2.value]: {
      label: country2.label,
      color: "hsl(var(--chart-2))",
    },
    [country3.value]: {
      label: country3.label,
      color: "hsl(var(--chart-3))",
    },
  }
  
  const Legend = () => (
    <ul className="flex justify-center gap-5 w-[100%]">
      {Object.keys(chartConfig).map((key) => (
        <li key={key} style={{ listStyleType: "none", color: chartConfig[key].color }}>
          <span style={{ color: chartConfig[key].color, marginRight: 8 }}>⬤</span>
          {chartConfig[key].label}
        </li>
      ))}
    </ul>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>{chartTitle}</CardTitle>
        <CardDescription>{chartDescritpion}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-[80vw] h-[300px]">
          <LineChart
            accessibilityLayer
            data={chartData}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="recorded_date"
              tickLine={true}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
            <Line
              dataKey={country1.value}
              type="monotone"
              stroke={`var(--color-${country1.value})`}
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey={country2.value}
              type="monotone"
              stroke={`var(--color-${country2.value})`}
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey={country3.value}
              type="monotone"
              stroke={`var(--color-${country3.value})`}
              strokeWidth={2}
              dot={false}
            />
            <Legend />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default ForecastChart