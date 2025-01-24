interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex flex-grow flex-col gap-4 w-full lg:max-w-md p-4">
      {children}
    </div>
  );
};
