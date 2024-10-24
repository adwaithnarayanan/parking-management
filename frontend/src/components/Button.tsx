type ButtonPropsType = {
  children: React.ReactNode;
  type: "submit" | "button";
  btnType: "save" | "delete" | "refreshCamera";
  onClick?: () => void;
};

const Button = ({ children, btnType, ...props }: ButtonPropsType) => {
  let btnStyle: string = "";
  if (btnType === "save" || btnType === "delete") {
    btnStyle = `text-sm leading-5 text-white transition-colors duration-150 bg-secondary-punchPink border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-punchPink px-8 py-2 px4 h-fit mb-2 self-end`;
  } else if (btnType === "refreshCamera") {
    btnStyle = `bg-secondary-punchPink p-2 rounded-md hover:scale-110 h-fit ml-auto block`;
  }
  return (
    <button className={btnStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
