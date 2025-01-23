"use client";
import { Header } from "@/components/app/header";
import { formatIntCurrency } from "@/lib/utils";
import { Navigation } from "./components/navigation";
import Link from "next/link";
import { TbChevronRight } from "react-icons/tb";
import { ResumeTransactions } from "./components/resume-transactions";

export default function Home() {
  return (
    <div className="flex flex-grow flex-col gap-4 w-full lg:max-w-md pb-10">
      <header className="flex flex-col w-full bg-primary px-4 py-8 gap-6">
        <Header />
        <div className="flex flex-col items-center justify-center text-center mt-4 animate-fade-in">
          <h1 className="font-semibold">{formatIntCurrency(40)}</h1>
          <span className="font-light">Saldo devedor</span>
        </div>
        <Navigation />
      </header>
      <div className="w-full flex flex-col gap-4 p-4 animate-fade-in">
        <div className="flex w-full justify-between items-center">
          <h3 className="text-text-primary font-semibold text-xl">Atividade</h3>

          <Link
            href="/history"
            className="flex items-center gap-2 text-text-secondary hover:underline"
          >
            Ver todos
            <TbChevronRight size={20} />
          </Link>
        </div>
        <ResumeTransactions />
      </div>
    </div>
  );
}
