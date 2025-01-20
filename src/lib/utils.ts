import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const removeMask = (value: string) => value.replace(/\D/g, "");

export function formatPhone(msisdn: string): string | null {
  if (!msisdn) return null;

  if (msisdn.length === 13) {
    return `(${msisdn.substring(2, 4)}) ${msisdn.substring(
      4,
      9,
    )}-${msisdn.substring(9, 13)}`;
  } else if (msisdn.length === 11) {
    return `(${msisdn.substring(0, 2)}) ${msisdn.substring(
      2,
      7,
    )}-${msisdn.substring(7, 11)}`;
  }

  return msisdn;
}

export const formatIntCurrency = (value: number | string) => {
  // const newValue = +value / 100;
  const newValue = +value;

  if (isNaN(newValue)) return "ERROR";

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(newValue);
};
