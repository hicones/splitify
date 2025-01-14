"use client";

import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Spinner } from "@/components/ui/spinner";

const otpCodeSchema = z.object({
  code: z
    .string({
      message: "E-mail é obrigatório",
    })
    .min(4)
    .max(4),
});

type OtpCodeSchema = z.infer<typeof otpCodeSchema>;

export default function ConfirmCodePage() {
  const form = useForm<OtpCodeSchema>({
    resolver: zodResolver(otpCodeSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = (data: OtpCodeSchema) => {
    console.log(data);
  };

  return (
    <section className="flex flex-col justify-between h-screen gap-4 p-4 w-full items-center">
      <div />
      <div className="flex flex-col gap-4 max-w-96">
        <h1>Código OTP 🔐</h1>
        <p className="text-xs text-text-secondary font-medium">
          Enviamos um código OTP para o seu e-mail. Insira o código OTP abaixo
          para verificar.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 items-center w-full"
        >
          <InputOTP maxLength={4}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </form>
      </div>
      <Button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        className="w-full max-w-96 bg-primary mt-4"
        disabled={isSubmitting}
      >
        {isSubmitting ? <Spinner variant="secondary" /> : "Confirmar"}
      </Button>
    </section>
  );
}
