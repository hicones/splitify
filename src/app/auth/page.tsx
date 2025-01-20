import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter, FaFacebook } from "react-icons/fa6";
import Image from "next/image";

export default function AuthPage() {
  return (
    <section className="flex flex-1 flex-col h-full justify-center gap-6 p-4 max-w-96 w-full animate-fade-in">
      <Image
        src="/logo.svg"
        width={80}
        height={80}
        alt="Splitify Logo"
        className="self-center"
      />
      <div className="flex flex-col gap-4 text-center">
        <h1>Vamos começar!</h1>
        <p className="text-xs text-text-secondary font-medium">
          Com o Splitify, dividir despesas e contas ficou mais fácil do que
          nunca.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Button
          className="w-full"
          variant="social"
        >
          <FcGoogle />
          <span>Continue with Google</span>
          <div />
        </Button>
        <Button
          className="w-full"
          variant="social"
        >
          <FaFacebook className="text-[#3b5998]" />
          <span>Continue with Facebook</span>
          <div />
        </Button>
        <Button
          className="w-full"
          variant="social"
        >
          <FaXTwitter />
          <span>Continue with X</span>
          <div />
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <Button
          className="w-full bg-primary"
          asChild
        >
          <Link href="/auth/register">Cadastrar-se</Link>
        </Button>
        <Button
          className="w-full"
          variant="secondary"
          asChild
        >
          <Link href="/auth/login">Entrar</Link>
        </Button>
      </div>
      <span className="flex gap-4 justify-center items-center">
        <Link
          href="#"
          target="_blank"
          className="hover:underline text-xs text-text-secondary font-medium"
        >
          Politicas de privacidade
        </Link>
        <Link
          href="#"
          target="_blank"
          className="hover:underline text-xs text-text-secondary font-medium"
        >
          Termos de serviço
        </Link>
      </span>
    </section>
  );
}
