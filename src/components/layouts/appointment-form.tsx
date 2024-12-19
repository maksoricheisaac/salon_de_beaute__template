"use client"
import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { useToast } from "@/src/hooks/use-toast";

export const AppointmentForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone || !service) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons rapidement pour confirmer votre rendez-vous.",
    });

    // Reset form
    setName("");
    setPhone("");
    setService("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div className="space-y-2">
        <Label htmlFor="name">Nom complet</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Votre nom"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Téléphone</Label>
        <Input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Votre numéro"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service souhaité</Label>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger>
            <SelectValue placeholder="Choisir un service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="coupe">Coupe</SelectItem>
            <SelectItem value="coloration">Coloration</SelectItem>
            <SelectItem value="brushing">Brushing</SelectItem>
            <SelectItem value="soin">Soin</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full bg-salon-primary hover:bg-salon-primary/90">
        Demander un rendez-vous
      </Button>
    </form>
  );
};
