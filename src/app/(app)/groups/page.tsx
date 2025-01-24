import { Header } from "@/components/app/header";
import { GroupsList } from "./components/groups-list";

export default function GroupsPage() {
  return (
    <div className="flex flex-grow flex-col gap-4 w-full lg:max-w-md pb-10">
      <header className="flex flex-col w-full px-4 py-8 gap-6">
        <Header title="Grupos" />
      </header>

      <div className="w-full flex flex-col flex-grow gap-4 p-4 animate-fade-in justify-center">
        <GroupsList />
      </div>
    </div>
  );
}
