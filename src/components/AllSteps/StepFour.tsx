import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Schéma Zod pour la validation
const formSchema = z.object({
  firstname: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  phone: z.string().min(10, "Veuillez entrer un numéro de téléphone valide"),
  address: z.string().min(5, "Veuillez entrer une adresse valide"),
  code: z.number().min(10, "Veuillez entrer le code postal"),
  example: z.boolean(),
});

type Inputs = z.infer<typeof formSchema>;

export default function StepFour() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="lg:max-w-4xl mx-auto lg:p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Prénom */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Prénom
          </label>
          <input
            type="text"
            {...register("firstname")}
            className="w-full border rounded-lg p-2"
          />
          {errors.firstname && (
            <p className="text-red-500 text-xs">{errors.firstname.message}</p>
          )}
        </div>

        {/* Nom */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            {...register("lastName")}
            className="w-full border rounded-lg p-2"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs">{errors.lastName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full border rounded-lg p-2"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>

        {/* Téléphone */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Numéro de téléphone
          </label>
          <input
            type="text"
            {...register("phone")}
            className="w-full border rounded-lg p-2"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs">{errors.phone.message}</p>
          )}
        </div>

        {/* Adresse */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Adresse
          </label>
          <input
            type="text"
            {...register("address")}
            className="w-full border rounded-lg p-2"
          />
          {errors.address && (
            <p className="text-red-500 text-xs">{errors.address.message}</p>
          )}
        </div>

        {/* Code postal */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Code postal
          </label>
          <input
            type="number"
            {...register("code", { valueAsNumber: true })}
            className="w-full border rounded-lg p-2"
          />
          {errors.code && (
            <p className="text-red-500 text-xs">{errors.code.message}</p>
          )}
        </div>

        {/* Case à cocher */}
        <div className="mb-4">
          <input type="checkbox" {...register("example")} className="mr-2" />
          <label htmlFor="atelier" className="text-gray-700">
            Vous préférez nous apporter votre appareil à notre atelier au{" "}
            <strong>1 rue des Boucherie</strong> ?
          </label>
          {errors.example && (
            <p className="text-red-500 text-xs">{errors.example.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-lg w-full"
        >
          Soumettre
        </button>
      </form>
    </div>
  );
}
