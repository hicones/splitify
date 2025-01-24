import { cn } from "@/lib/utils";
import Image from "next/image";
import { IoNotificationsOutline } from "react-icons/io5";

export const Header = ({
  title,
  hideNotification,
}: {
  title?: string;
  hideNotification?: boolean;
}) => {
  const hasNotification = true;

  return (
    <nav className="w-full flex items-center justify-between gap-4 animate-fade">
      <Image
        src="/logo-contrast.svg"
        alt="logo"
        width={32}
        height={32}
      />

      <h2 className="font-semibold text-lg text-text-primary">
        {title ?? "Splitify"}
      </h2>

      <div className="flex p-1 group">
        <IoNotificationsOutline
          className={cn(
            "size-6 text-text-primary cursor-pointer hover:scale-105 transition-all hover:rotate-12",
            hideNotification && "opacity-0 pointer-events-none",
          )}
        />
        {hasNotification && (
          <div
            className={cn(
              "w-2 h-2 bg-red-500 rounded-full group-hover:scale-110 transition-all",
              hideNotification && "opacity-0 pointer-events-none",
            )}
          ></div>
        )}
      </div>
    </nav>
  );
};
