"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import countries from "@/lib/countries";
import { useState } from "react";

function FilterMetrics() {
  const [filteredMetrics, setFilteredMetrics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numLocations, setNumLocations] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch(`http://${process.env.NEXT_PUBLIC_BACKEND_URL}/api/forecasts/avg?n=${numLocations}`, {method: "GET"});

      const result = await response.json();
      setFilteredMetrics(result);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-[83vw]">
      <CardHeader>
        <CardTitle>Average Temperature Metric</CardTitle>
        <CardDescription>Avg temperature metric per location.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input
                id="name"
                placeholder="Number of locations"
                type="number"
                onChange={(e) => setNumLocations(e.target.value)}
              />
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Location</TableHead>
                  <TableHead>Average Temperature</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMetrics.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell className="font-medium">
                      {countries.find(c => c.value === row.name).label}
                    </TableCell>
                    <TableCell>{row.avg_temp}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default FilterMetrics;
