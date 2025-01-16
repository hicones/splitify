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
import Link from "next/link";
import { removeMask } from "@/lib/utils";
import { PatternFormat } from "react-number-format";
import {
  TbMail,
  TbLockPassword,
  TbUser,
  TbPhone,
  TbPoint,
} from "react-icons/tb";

const registerSchema = z
  .object({
    email: z.string().email({
      message: "E-mail inválido",
    }),
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
    phone: z
      .string()
      .min(11, { message: "Insira um número válido" })
      .transform(removeMask),
    name: z.string({
      message: "Nome é obrigatório",
    }),
    surname: z.string({
      message: "Sobrenome é obrigatório",
    }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "As senhas não coincidem",
    path: ["password_confirmation"],
  });

type RegisterSchema = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const { handleSubmit } = form;

  const onSubmit = (data: RegisterSchema) => {
    console.log(data);
  };

  return (
    <div className="flex flex-1 flex-col gap-4 items-center w-full h-full justify-center animate-fade-in">
      <section className="flex flex-col gap-4 p-4 rounded-lg max-w-96 w-full">
        <h1>Criar conta 👩‍💻</h1>

        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Fulano"
                      icon={TbUser}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sobrenome</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Silva"
                      icon={TbPoint}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="fulano@mail.com"
                      icon={TbMail}
                      type="email"
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

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <PatternFormat
                      format="(##) #####-####"
                      placeholder="(99) 99999-9999"
                      mask="_"
                      customInput={Input}
                      icon={TbPhone}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full mt-4"
            >
              Confirmar
            </Button>
          </form>
        </Form>
      </section>
      <span className="text-base">
        Já é registrado? {""}
        <Button
          asChild
          variant="link"
        >
          <Link href={"/auth"}>Entrar</Link>
        </Button>
      </span>
    </div>
  );
}
