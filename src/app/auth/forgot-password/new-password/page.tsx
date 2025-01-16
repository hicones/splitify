"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TbLockPassword } from "react-icons/tb";

const forgotPasswordSchema = z.object({
  password: z
    .string({
      message: "Senha é obrigatória",
    })
    .min(6, {
      message: "Senha deve ter no mínimo 6 caracteres",
    })
    .refine(
      (password) =>
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[^A-Za-z0-9]/.test(password),
      {
        message:
          "A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
      },
    ),
  password_confirmation: z.string({
    message: "Confirmação de senha é obrigatória",
  }),
});

type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export default function NewPasswordPage() {
  const form = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const { handleSubmit } = form;

  const onSubmit = (data: ForgotPasswordSchema) => {
    console.log(data);
  };

  return (
    <section className="flex flex-1 flex-col justify-between h-full gap-4 p-4 max-w-96 w-full animate-fade-in">
      <div />
      <div className="flex flex-col gap-4">
        <h1>Criar nova senha 🔒</h1>
        <p className="text-xs text-text-secondary font-medium">
          Você está quase lá! Por favor, crie uma nova senha para sua conta no
          Splitify.
        </p>

        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      icon={TbLockPassword}
                      placeholder="********"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Use no mínimo 6 caracteres. Entre letras, números e
                    caracteres especiais.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password_confirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmar Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      icon={TbLockPassword}
                      placeholder="********"
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
        type="submit"
        onClick={handleSubmit(onSubmit)}
        className="w-full bg-primary mt-4"
      >
        Continuar
      </Button>
    </section>
  );
}
