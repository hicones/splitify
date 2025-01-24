import Image from "next/image";

const contacts = [];

export const ContactList = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-4">
      {contacts.length < 1 && (
        <div className="flex flex-col items-center justify-center gap-4">
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
            Você não tem nenhum contato
          </p>
        </div>
      )}
    </div>
  );
};
