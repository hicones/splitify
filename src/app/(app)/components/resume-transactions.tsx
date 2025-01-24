import Image from "next/image";

const transactions = [];

export const ResumeTransactions = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-4">
      {transactions.length < 1 && (
        <div className="flex-grow flex flex-col items-center justify-center gap-4">
          <Image
            alt="pranchetas"
            src="/no-data.svg"
            width={160}
            height={100}
          />
          <h4 className="font-semibold text-2xl text-text-primary mt-4">
            Sem transações
          </h4>
          <p className="font-light text-text-primary text-lg">
            Você não fez nenhuma transação
          </p>
        </div>
      )}
    </div>
  );
};
