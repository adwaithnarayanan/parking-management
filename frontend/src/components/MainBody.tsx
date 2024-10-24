import { DeviceSchema } from "../validationSchamas/index.ts";
import Button from "./Button.tsx";
import SectionInputField from "./SectionInputField";
import { useFormik } from "formik";

const MainBody = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      label: "",
      ip: "",
      port: 0,
      dashboardPort: 0,
    },
    validationSchema: DeviceSchema,
    onSubmit: (values) => {
      console.log("form submitted", values);
    },
  });

  console.log(errors);

  return (
    <main className="overflow-y-auto overflow-x-hidden p-10 h-full">
      <section>
        <section className="bg-white p-5 rounded-md shadow-sm border">
          <h1 className="text-lg mb-4">Access Control ANPR Devices</h1>
          <form onSubmit={handleSubmit}>
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
                  />
                </div>
                <div className="mb-2 w-full">
                  <SectionInputField
                    type="text"
                    name="ip"
                    id="ip"
                    placeholder="IP"
                    label="IP"
                    value={values.ip}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2 w-full">
                  <SectionInputField
                    type="number"
                    name="port"
                    id="port"
                    label="Port"
                    value={values.port}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2 w-full">
                  <SectionInputField
                    type="number"
                    id="dasboardPort"
                    name="dashboardPort"
                    label="Dashboard Port"
                    value={values.dashboardPort}
                    onChange={handleChange}
                  />
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
        </section>
        <section className="bg-white p-5 rounded-md shadow-sm border mt-4">
          {/*  */}
          <div className="flex flex-col gap-6 justify-between">
            <div className="border-b pb-5 last:pb-0 last:border-none min-h-24">
              <div className="flex justify-between">
                <span className="self-end text-sm text-gray-600">
                  Test Device
                  <span> | 192.168.0.39:5001</span>
                </span>
                <Button type="button" btnType="refreshCamera">
                  <img src="/src/assets/svgs/refresh.svg" alt="refetch" />
                </Button>
              </div>
              <h1 className="text-sm text-gray-600">Uncanny Cameras</h1>
              {/* saved devices */}
              <div className="flex flex-wrap gap-2 mt-2">
                <h1>Saved Cameras</h1>
                <div className="flex flex-wrap gap-2 mt-2">
                  <button>#1 EntryGate anpr 1 name changed</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white p-5 rounded-md shadow-sm border mt-4"></section>
      </section>
    </main>
  );
};

export default MainBody;
