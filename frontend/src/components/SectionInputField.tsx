import { UncannyHandleBlurType } from "../../types";

type SectionInputFieldPropType = {
  type: "text" | "number";
  id: string;
  name: string;
  placeholder?: string;
  value: string | number;
  label: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur: UncannyHandleBlurType;
};

const SectionInputField = ({ label, ...props }: SectionInputFieldPropType) => {
  return (
    <>
      <label className="inline-block mb-2 text-gray-600 text-sm">{label}</label>
      <input
        {...props}
        className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-darl focus:outline-none  "
      />
    </>
  );
};

export default SectionInputField;
