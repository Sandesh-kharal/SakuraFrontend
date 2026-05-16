"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { trainingFormSchema } from "@/app/schema/trainingFormSchema";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { trainingContent } from "../../lib/training-data";

export default function TrainingPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const resolvedParams = use(params);
  const serviceParam = resolvedParams.service;
  const data = trainingContent[serviceParam as keyof typeof trainingContent];

  if (!data) notFound();

  // Format the service name for the dropdown value (e.g., "agriculture" -> "Agriculture")
  const displayService = serviceParam.charAt(0).toUpperCase() + serviceParam.slice(1);

  const form = useForm({
    resolver: zodResolver(trainingFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      country: "",
      service: displayService,
      agree: false,
    },
  });

  function onSubmit(values: z.infer<typeof trainingFormSchema>) {
    console.log(values);
  }

  return (
    <div className="bg-[#fdfaf5] min-h-screen font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* --- SIDEBAR --- */}
          <aside className="order-2 lg:order-1 w-full lg:col-span-4 bg-[#8b3d5a] text-white p-6 sm:p-8 lg:p-10 rounded-[28px] sm:rounded-[32px] lg:rounded-[40px] shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight mb-2">
              Interested in SSW?
            </h2>
            <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">
              Send Message
            </h3>
            <p className="text-sm text-pink-100/70 mb-6 sm:mb-8 leading-relaxed">
              Fill in your details below and our counselors will reach out to
              you within 24 hours.
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 sm:space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[12px] sm:text-[13px] uppercase font-bold tracking-wider">
                          First Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="E.g. Shesh"
                            {...field}
                            className="bg-white text-slate-900 border-none h-10 sm:h-11 rounded-lg"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-[13px] italic" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[12px] sm:text-[13px] uppercase font-bold tracking-wider">
                          Last Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="E.g. Ghale"
                            {...field}
                            className="bg-white text-slate-900 border-none h-10 sm:h-11 rounded-lg"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-[13px] italic" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[12px] sm:text-[13px] uppercase font-bold tracking-wider">
                        Email *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. sandesh@example.com"
                          {...field}
                          className="bg-white text-slate-900 border-none h-10 sm:h-11 rounded-lg"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-[13px] italic" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[12px] sm:text-[13px] uppercase font-bold tracking-wider">
                        Phone (Nepal) *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+977 98XXXXXXXX"
                          {...field}
                          className="bg-white text-slate-900 border-none h-10 sm:h-11 rounded-lg"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-[13px] italic" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[12px] sm:text-[13px] uppercase font-bold tracking-wider">
                        Current City *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="E.g. Kathmandu"
                          {...field}
                          className="bg-white text-slate-900 border-none h-10 sm:h-11 rounded-lg"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-[13px] italic" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[12px] sm:text-[13px] uppercase font-bold tracking-wider">
                        Service *
                      </FormLabel>

                      <Select value={field.value} onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger className="w-full h-11 sm:h-12 lg:h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm sm:text-base text-slate-900 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 focus:ring-2 focus:ring-pink-200 focus:ring-offset-0">
                            <SelectValue placeholder="Select Service" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent className="min-w-(--radix-select-trigger-width) rounded-xl border border-slate-200 bg-white p-1 text-slate-900 shadow-2xl">
                          <SelectItem
                            value={data.title}
                            className=" rounded-lg  text-sm sm:text-base focus:bg-slate-100 focus:text-slate-900"
                          >
                            {data.title}
                          </SelectItem>
                        </SelectContent>
                      </Select>

                      <p className="mt-1 text-[9px] italic text-pink-200/70">
                        Pre-selected based on page
                      </p>
                      <FormMessage className="text-[13px] text-red-500" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-[#d84063] hover:bg-[#b0304d] text-white font-bold py-5 sm:py-6 lg:py-7 rounded-xl sm:rounded-2xl transition-all uppercase tracking-widest text-xs sm:text-sm shadow-lg mt-2 sm:mt-4"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="order-1 lg:order-2 w-full lg:col-span-8 pt-0 lg:pt-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a2b3c] mb-6 sm:mb-8 lg:mb-10 tracking-tight">
              {data.subtitle}
            </h1>
            <div className="space-y-5 sm:space-y-6 lg:space-y-8 text-base sm:text-lg lg:text-xl text-slate-600 leading-[1.7] sm:leading-[1.8] max-w-4xl font-light">
              <p>{data.description1}</p>
              <p>{data.description2}</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}