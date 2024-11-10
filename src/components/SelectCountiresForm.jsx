"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Check, ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import countries from "@/lib/countries"

const FormSchema = z.object({
  country_1: z.string({
    required_error: "Please select a country.",
  }),
  country_2: z.string({
    required_error: "Please select a country.",
  }),
  country_3: z.string({
    required_error: "Please select a country.",
  }),
})

function SelectCountriesForm({handleSubmit}) {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data) {
    handleSubmit(JSON.stringify(data))
  }

  return (
    <div>
        <Form {...form}>
            <FormDescription className="mb-4">Please select 3 countries</FormDescription>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-4 flex-wrap">
                <FormField
                control={form.control}
                name="country_1"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                    <FormLabel>Country 1</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                        <FormControl>
                            <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                                "w-[200px] justify-between",
                                !field.value && "text-muted-foreground"
                            )}
                            >
                            {field.value
                                ? countries.find(
                                    (country) => country.value === field.value
                                )?.label
                                : "Select country"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandInput placeholder="Search country..." />
                            <CommandList>
                            <CommandEmpty>No country found.</CommandEmpty>
                            <CommandGroup>
                                {countries.map((country) => (
                                <CommandItem
                                    value={country.label}
                                    key={country.value}
                                    onSelect={() => {
                                    form.setValue("country_1", country.value)
                                    }}
                                >
                                    {country.label}
                                    <Check
                                    className={cn(
                                        "ml-auto",
                                        country.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                    />
                                </CommandItem>
                                ))}
                            </CommandGroup>
                            </CommandList>
                        </Command>
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="country_2"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                    <FormLabel>Country 2</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                        <FormControl>
                            <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                                "w-[200px] justify-between",
                                !field.value && "text-muted-foreground"
                            )}
                            >
                            {field.value
                                ? countries.find(
                                    (country) => country.value === field.value
                                )?.label
                                : "Select country"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandInput placeholder="Search country..." />
                            <CommandList>
                            <CommandEmpty>No country found.</CommandEmpty>
                            <CommandGroup>
                                {countries.map((country) => (
                                <CommandItem
                                    value={country.label}
                                    key={country.value}
                                    onSelect={() => {
                                    form.setValue("country_2", country.value)
                                    }}
                                >
                                    {country.label}
                                    <Check
                                    className={cn(
                                        "ml-auto",
                                        country.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                    />
                                </CommandItem>
                                ))}
                            </CommandGroup>
                            </CommandList>
                        </Command>
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="country_3"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                    <FormLabel>Country 3</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                        <FormControl>
                            <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                                "w-[200px] justify-between",
                                !field.value && "text-muted-foreground"
                            )}
                            >
                            {field.value
                                ? countries.find(
                                    (country) => country.value === field.value
                                )?.label
                                : "Select country"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                        <Command>
                            <CommandInput placeholder="Search country..." />
                            <CommandList>
                            <CommandEmpty>No country found.</CommandEmpty>
                            <CommandGroup>
                                {countries.map((country) => (
                                <CommandItem
                                    value={country.label}
                                    key={country.value}
                                    onSelect={() => {
                                    form.setValue("country_3", country.value)
                                    }}
                                >
                                    {country.label}
                                    <Check
                                    className={cn(
                                        "ml-auto",
                                        country.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                    />
                                </CommandItem>
                                ))}
                            </CommandGroup>
                            </CommandList>
                        </Command>
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" className="mt-5">Submit</Button>
            </form>
        </Form>
    </div>
  )
}

export default SelectCountriesForm