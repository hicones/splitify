import { Header } from "@/components/app/header";
import { ContactList } from "./components/contact-list";

export default function ContactPage() {
  return (
    <div className="flex flex-grow flex-col gap-4 w-full lg:max-w-md pb-10">
      <header className="flex flex-col w-full px-4 py-8 gap-6">
        <Header title="Contatos" />
      </header>

      <div className="w-full flex flex-col flex-grow gap-4 p-4 animate-fade-in justify-center">
        <ContactList />
      </div>
    </div>
  );
}
