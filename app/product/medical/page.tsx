"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MedicalData, medicalDataSchema } from "./(schemas)/medicalDataSchema";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function MedicalPage() {
  const { register, handleSubmit } = useForm<MedicalData>({
    defaultValues: {
      height: "0",
      weight: "0",
      bloodType: "",
    },
    resolver: zodResolver(medicalDataSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="p-4">
      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <div>
          <Label htmlFor="height">Height</Label>
          <Input id="height" type="number" required {...register("height")} />
        </div>
        <div>
          <Label htmlFor="weight">Weight</Label>
          <Input id="weight" type="number" required {...register("weight")} />
        </div>
        <div>
          <Label htmlFor="bloodType">Blood Type</Label>
          <Input id="bloodType" required {...register("bloodType")} />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
