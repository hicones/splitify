"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TbMail } from "react-icons/tb";

const forgotPasswordSchema = z.object({
  email: z
    .string({
      message: "E-mail é obrigatório",
    })
    .email({
      message: "E-mail inválido",
    }),
});

type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const form = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const { handleSubmit } = form;

  const onSubmit = (data: ForgotPasswordSchema) => {
    console.log(data);
  };

  return (
    <section className="flex flex-col gap-4 p-4 h-full justify-between max-w-96 w-full animate-fade-in">
      <div />
      <div className="flex flex-col gap-4">
        <h1>Redefina sua senha 🔑</h1>
        <p className="text-xs text-text-secondary font-medium">
          Por favor, insira seu e-mail e enviaremos um código OTP no próximo
          passo para redefinir sua senha.
        </p>

        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      type="email"
                      icon={TbMail}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
      <Button
        onClick={handleSubmit(onSubmit)}
        type="submit"
        className="w-full bg-primary mt-4"
      >
        Continuar
      </Button>
    </section>
  );
}
