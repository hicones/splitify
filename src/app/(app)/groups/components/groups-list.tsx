import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TbPlus } from "react-icons/tb";

const groups = [];

export const GroupsList = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-4">
      {groups.length < 1 && (
        <div className="flex-grow flex flex-col items-center justify-center gap-4">
          <Image
            alt="pranchetas"
            src="/no-data.svg"
            width={160}
            height={100}
          />
          <h4 className="font-semibold text-2xl text-text-primary mt-4">
            Vazio
          </h4>
          <p className="font-light text-text-primary text-lg">
            Você não está em nenhum grupo
          </p>

          <Button className="w-fit px-6 font-semibold">
            <TbPlus className="size-6" />
            Criar novo grupo
          </Button>
        </div>
      )}

      <Button className="w-fit absolute bottom-10 right-6">
        <TbPlus className="size-6" />
      </Button>
    </div>
  );
};
