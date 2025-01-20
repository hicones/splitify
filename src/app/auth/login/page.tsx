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
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { TbMail, TbLockPassword } from "react-icons/tb";

const authSchema = z.object({
  email: z
    .string({
      message: "E-mail é obrigatório",
    })
    .email({
      message: "E-mail inválido",
    }),
  password: z
    .string({
      message: "Senha é obrigatória",
    })
    .min(6, {
      message: "Senha deve ter no mínimo 6 caracteres",
    }),
});

type AuthSchema = z.infer<typeof authSchema>;

export default function LoginPage() {
  const form = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
  });

  const { handleSubmit } = form;

  const onSubmit = (data: AuthSchema) => {
    console.log(data);
  };

  return (
    <section className="flex flex-grow-0 lg:flex-grow flex-col h-full justify-between gap-4 p-4 max-w-96 w-full animate-fade-in">
      <div />
      <div className="flex flex-col gap-4">
        <h1>Bem vindo(a) 👋</h1>
        <p className="text-xs text-text-secondary font-medium">
          Por favor, insira seu e-mail e senha para fazer login.
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

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Senha"
                      icon={TbLockPassword}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <span className="flex justify-between items-center">
              <div className="flex items-center justify-center">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-xs text-text-secondary ml-2"
                >
                  Lembrar-me
                </label>
              </div>
              <Button
                asChild
                variant="link"
              >
                <Link href="/auth/forgot-password">Esqueceu a senha?</Link>
              </Button>
            </span>

            <Separator />

            <span className="text-base text-center">
              Não é registrado? {""}
              <Button
                asChild
                variant="link"
              >
                <Link href={"/auth/register"}>Criar conta</Link>
              </Button>
            </span>
          </form>
        </Form>
      </div>
      <Button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        className="w-full bg-primary"
      >
        Confirmar
      </Button>
    </section>
  );
}
