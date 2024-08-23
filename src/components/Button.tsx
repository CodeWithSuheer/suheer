interface ButtonProps {
  text: String;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <>
      <button
        type="button"
        className="lg:text:lg rounded-md bg-[#252525] px-9 py-2 text-sm tracking-wider text-white"
      >
        {text}
      </button>
    </>
  );
};

export default Button;
