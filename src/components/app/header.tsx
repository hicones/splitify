import Image from "next/image";
import { IoNotificationsOutline } from "react-icons/io5";

export const Header = () => {
  return (
    <nav className="w-full flex items-center justify-between gap-4">
      <Image
        src="/logo-contrast.svg"
        alt="logo"
        width={32}
        height={32}
      />

      <h2 className="font-semibold text-lg text-text-primary">Splitify</h2>

      <IoNotificationsOutline className="size-6 text-text-primary cursor-pointer hover:scale-105 transition-all hover:rotate-12" />
    </nav>
  );
};
