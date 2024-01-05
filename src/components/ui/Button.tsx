export const Button = ({
    className,
    children,
    ...rest
  }: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) => {
    return (
      <button
        className={`font-medium border-2 bg-[#2f2f2f] border-none md:px-10 md:py-4 px-4 py-3 rounded-md ${className}`}
        {...rest}
      >
        {children}
      </button>
    );
  };