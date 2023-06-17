interface ButtonProps {
  children?: React.ReactNode;
  title: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
}

const Button = ({ title, type, onClick, className }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      console.log("yes u clicked ", title);
      onClick();
    }
  };
  return (
    <button
      className={`rounded-full w-auto  h-auto bg-whiteborder-4  border-purple-500 text-black font-bold   hover:border-emerald-300   py-2 px-4 sm:w-32 sm:py-3 sm:px-6 lg:w-40 lg:py-4 lg:px-8 ${className}`}
      type={type}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default Button;
