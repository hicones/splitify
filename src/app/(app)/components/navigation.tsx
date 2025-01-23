import { TbClock, TbSend, TbSquareRoundedArrowDown } from "react-icons/tb";

const navigationItems = [
  {
    icon: <TbSend size={28} />,
    label: "Pagar",
  },
  {
    icon: <TbSquareRoundedArrowDown size={28} />,
    label: "Cobrar",
  },
  {
    icon: <TbClock size={28} />,
    label: "Histórico",
  },
];

export const Navigation = () => {
  return (
    <div className="flex w-full items-center justify-center px-2 animate-fade-in">
      <ul className="flex gap-6 items-center text-text-primary w-full justify-center">
        {navigationItems.map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-center justify-center gap-2 font-medium first:hover:font-semibold transition-all duration-300"
          >
            <button className="flex items-center justify-center rounded-full border border-text-primary p-2 hover:scale-105 transition-all">
              {item.icon}
            </button>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
