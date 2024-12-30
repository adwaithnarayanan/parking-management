import { Formik } from "formik";
import SectionInputField from "./SectionInputField";
import { UncannyCameraSchema } from "../validationSchamas/schema";
import { useRef } from "react";

type AddCameraFormPropsType = {
  cameraValues: { ip: string; label: string; port: number, cameraType:string };
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddCamera: (cameraDetails: {
    ip: string;
    label: string;
    port: number;
    cameraType:string;
  }) => void;
};

const AddCameraForm = ({
  handleAddCamera,
  cameraValues,
  setShowForm,
}: AddCameraFormPropsType) => {
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="absolute flex items-center justify-center max-h-screen h-full top-0 z-20 left-0 w-full bg-[rgba(0,0,0,0.3)]"
      onClick={(e) =>
        formRef.current &&
        !formRef.current.contains(e.target as Node) &&
        setShowForm(false)
      }
    >
      <div className="fixed bg-white z-30 max-h-[96%] overflow-y-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md rounded-md w-[90%] md:w-1/3 md:min-w-1/3 md:max-w-1/2 cameraForm">
        <div
          ref={formRef}
          className="bg-white p-5 rounded-md shadow-sm border flex flex-col"
        >
          <header className="flex justify-end mb-2 ">
            <button onClick={() => setShowForm(false)}>
              <img src="./src/assets/svgs/closeIcon.svg" alt="" />
            </button>
          </header>
          <main>
            <Formik
              initialValues={{ ...cameraValues }}
              onSubmit={(values) => {
                handleAddCamera(values);
              }}
              validationSchema={UncannyCameraSchema}
            >
              {({
                values,
                errors,
                touched,
                handleSubmit,
                handleBlur,
                handleChange,
              }) => (
                <form
                  action="#"
                  onSubmit={handleSubmit}
                  className="flex flex-col"
                >
                  <span className="mb-2 text-lg">Add Camera</span>
                  <div className="mb-2">
                    <SectionInputField
                      type="text"
                      id="ip"
                      label="IP"
                      name="ip"
                      placeholder="IP"
                      onBlur={handleBlur}
                      value={values.ip}
                      onChange={handleChange}
                    />
                    <span className="text-red-400 text-sm">
                      {touched.ip && errors.ip}
                    </span>
                  </div>
                  <div className="mb-2">
                    <SectionInputField
                      type="number"
                      id="port"
                      label="Port"
                      name="port"
                      value={values.port}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <span className="text-red-400 text-sm">
                      {touched.port && errors.port}
                    </span>
                  </div>

                  <div className="mb-2">
                    <SectionInputField
                      type="text"
                      id="label"
                      label="Name"
                      name="label"
                      placeholder="Ex: 2w_Exit_Anpr_North1"
                      value={values.label}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <span className="text-red-400 text-sm">
                      {touched.label && errors.label}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="text-gray-600 text-sm w-full mb-2">
                      Camera Type
                    </div>
                    <select
                      id="cameraType"
                      name="cameraType"
                      className="px-2 w-full py-1 border-2"
                      value={values.cameraType}
                      onChange={handleChange}
                    >
                      <option value="entry">Entry</option>
                      <option value="exit">Exit</option>
                    </select>
                    <span className="text-red-400 text-sm">
                      {touched.cameraType && errors.cameraType}
                    </span>
                  </div>
                  <button
                    type="submit"
                    className="my-2 text-sm leading-5 text-white transition-colors duration-150 bg-secondary-punchPink border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-punchPink px-8 py-2 w-fit "
                  >
                    Save
                  </button>
                </form>
              )}
            </Formik>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AddCameraForm;
