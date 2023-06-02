interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => {
  return (
    <button className="rounded-full w-24 bg-amber-500 hover:animate-pulse transition duration-300 delay-75 translate-x-1 ease-in-out text-white font-bold py-2 px-4 sm:w-32 sm:py-3 sm:px-6 lg:w-40 lg:py-4 lg:px-8">
      {title}
    </button>
  );
};

export default Button;
