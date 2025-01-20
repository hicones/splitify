import { Spinner } from "@/components/ui/spinner";
import Image from "next/image";

export default function LoadingPage() {
  return (
    <section className="flex flex-1 flex-col h-full justify-between gap-6 p-4 max-w-96 w-full py-20 animate-fade-in">
      <div />
      <div className="flex flex-col gap-4 text-center">
        <Image
          src="/logo.svg"
          width={100}
          height={80}
          alt="Splitify Logo"
          className="self-center"
        />
        <h1>Splitify</h1>
      </div>

      <Spinner
        size={"xl"}
        className="self-center"
      />
    </section>
  );
}
