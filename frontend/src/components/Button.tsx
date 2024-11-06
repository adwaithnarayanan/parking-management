type ButtonPropsType = {
  id?: number;
  index?: number;
  children: React.ReactNode;
  type: "submit" | "button";
  btnType: "save" | "delete" | "refreshCamera" | "addNewDevice";
  handleClick?: ({ id, index }: { id?: number; index?: number }) => void;
};

const Button = ({
  children,
  handleClick,
  id,
  index,
  btnType,
  ...props
}: ButtonPropsType) => {
  let btnStyle: string = "";
  if (btnType === "save" || btnType === "delete") {
    btnStyle = `text-sm leading-5 text-white transition-colors duration-150 bg-secondary-punchPink border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-punchPink px-8 py-2 px4 h-fit mb-2 self-end`;
  } else if (btnType === "refreshCamera") {
    btnStyle = `bg-secondary-punchPink p-2 rounded-md hover:scale-110 h-fit ml-auto block`;
  } else if (btnType === "addNewDevice") {
    btnStyle = `inline-flex justify-center items-center w-full rounded-md border border-primary-dark shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-offset-2`;
  }

  return (
    <button
      className={btnStyle}
      {...props}
      onClick={() => {
        if (id) handleClick && handleClick({ id });
        else handleClick && handleClick({ index: 0 });
      }}
    >
      {children}
    </button>
  );
};

export default Button;
