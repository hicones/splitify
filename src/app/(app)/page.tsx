import { Header } from "@/components/app/header";
import { formatIntCurrency } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-grow flex-col gap-4 w-full max-w-96 ">
      <header className="flex flex-col w-full bg-primary px-4 py-6 gap-6">
        <Header />
        <div className="flex flex-col items-center justify-center text-center mt-4">
          <h1 className="font-semibold">{formatIntCurrency(40)}</h1>
          <span className="font-light">Saldo devedor</span>
        </div>
      </header>
      <div>Atividade</div>
    </div>
  );
}
