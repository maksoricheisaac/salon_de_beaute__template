"use client"

import { Navbar } from "@/src/components/layouts/navbar";
import { Footer } from "@/src/components/layouts/footer";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Calendar } from "@/src/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/src/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon, Loader } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { appointmentSchema, type AppointmentFormData } from "./appointment.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { useToast } from "@/src/hooks/use-toast";
import { PhoneInput } from "@/src/components/phone-input";
import { sendAppointmentEmail } from "./appointment.action";
import { Toaster } from "@/src/components/ui/toaster";
import { useState } from "react";

const Appointment = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false)
  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
    },
  });

  const onSubmit = async(data: AppointmentFormData) => {
    setLoading(true)
    const response = await sendAppointmentEmail(data)
    if(response){
        setLoading(false)
    }

    if(response?.data?.success){
        toast({
            title: "Demande envoyée !",
            description: "Nous vous contacterons rapidement pour confirmer votre rendez-vous.",
            variant: "success"
          });
    } else {
        toast({
            title: "Demande non envoyée !",
            description: "Veuillez réessayer ultérieurement.",
            variant: "destructive"
          });
    }
    
    form.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Toaster />
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
              Prendre Rendez-vous
            </h1>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prénom</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre prénom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                          <Input placeholder="Votre nom" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="votre@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone</FormLabel>
                      <FormControl>
                        <PhoneInput type="tel" placeholder="+242 XX XXX XX XX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service souhaité</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="coupe">Coiffure</SelectItem>
                          <SelectItem value="manucure">Manucure</SelectItem>
                          <SelectItem value="pedicure">Pédicure</SelectItem>
                          <SelectItem value="makeup">Maquillage</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Date souhaitée</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP", { locale: fr })
                              ) : (
                                <span>Choisir une date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date() || date.getDay() === 0
                            }
                          
                            
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  {
                    loading
                    ?
                    <Loader className="animate-spin text-white w-8 h-8" />
                    :
                    <>Confirmer le rendez-vous</>
                  }
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Appointment;