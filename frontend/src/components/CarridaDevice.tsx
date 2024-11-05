import SectionInputField from "./SectionInputField";
import Button from "./Button";

type CarridaDevicePropsType = {
  values: { label: string };
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  errors: any;
  handleBlur: any;
};

const CarridaDevice = ({
  values,
  errors,
  handleChange,
  handleBlur,
}: CarridaDevicePropsType) => {
  return (
    <form action="">
      <div className="flex gap-2 items-start justify-between">
        <div className="flex gap-2 basis-full">
          <div className="mb-2 w-full">
            <SectionInputField
              type="text"
              name="label"
              id="label"
              placeholder="Label"
              label="Label"
              value={values.label}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="text-red-400 text-sm">{errors.label}</span>
          </div>
        </div>
        <div className="flex gap-2 mt-7">
          <Button type="submit" btnType="save">
            Save
          </Button>
          <Button type="button" btnType="delete">
            Delete
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CarridaDevice;
