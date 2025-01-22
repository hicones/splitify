"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbHome, TbUsersGroup, TbUsers, TbUser } from "react-icons/tb";

const bottomNavigationLinks = [
  { label: "Home", icon: TbHome, href: "/" },
  { label: "Grupos", icon: TbUsersGroup, href: "/groups" },
  { label: "Contatos", icon: TbUsers, href: "/contact" },
  { label: "Conta", icon: TbUser, href: "/account" },
];

export const BottomNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-around w-full lg:max-w-md p-4 mt-auto fixed bottom-0 bg-background">
      {bottomNavigationLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "flex flex-col items-center justify-center",
            pathname === link.href
              ? "font-semibold text-text-primary"
              : "text-text-secondary font-light",
          )}
        >
          <link.icon size={24} />
          <span className="text-xs">{link.label}</span>
        </Link>
      ))}
    </nav>
  );
};
