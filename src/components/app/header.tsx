import Image from "next/image";
import { IoNotificationsOutline } from "react-icons/io5";

export const Header = () => {
  const hasNotification = true;

  return (
    <nav className="w-full flex items-center justify-between gap-4 animate-fade">
      <Image
        src="/logo-contrast.svg"
        alt="logo"
        width={32}
        height={32}
      />

      <h2 className="font-semibold text-lg text-text-primary">Splitify</h2>

      <div className="flex p-1 group">
        <IoNotificationsOutline className="size-6 text-text-primary cursor-pointer hover:scale-105 transition-all hover:rotate-12" />
        {hasNotification && (
          <div className="w-2 h-2 bg-red-500 rounded-full group-hover:scale-110 transition-all"></div>
        )}
      </div>
    </nav>
  );
};
