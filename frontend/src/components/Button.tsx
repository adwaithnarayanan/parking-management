type ButtonPropsType = {
  id?: number;
  index?: number;
  children: React.ReactNode;
  type: "submit" | "button";
  btnType:
    | "save"
    | "delete"
    | "refreshCamera"
    | "addNewDevice"
    | "addIdentifier"
    | "download";
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
  } else if (btnType === "addIdentifier")
    btnStyle = `text-sm text-gray-800 bg-slate-200 px-6 py-2 hover:bg-slate-300 duration-300 my-2 capitalize`;
  else if (btnType === "download")
    btnStyle = `mx-2 px-2 py-1 bg-blue-900 text-white my-8 hover:bg-blue-800 rounded-sm`;

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
