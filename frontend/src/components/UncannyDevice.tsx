import { Formik } from "formik";
import Button from "./Button";
import SectionInputField from "./SectionInputField";
import { UncannyDeviceType } from "../../types";
import { useEditDevice } from "../hooks/APIs/useEditDevice";
import { useAddDevice } from "../hooks/APIs/useAddDevice";
import { useDeleteDevice } from "../hooks/APIs/useDeleteDevice";
import Message from "./Message";
import { UncannyDeviceSchema } from "../validationSchamas/schema";

type UncannyDevicePropsType = {
  device: UncannyDeviceType;
  setAddNewDevice: React.Dispatch<React.SetStateAction<boolean>>;
};

const UncannyDevice = ({ device, setAddNewDevice }: UncannyDevicePropsType) => {
  // console.log(device);
  const { mutate: mutateEditDevice, isSuccess: isSuccessEditDevice } =
    useEditDevice();
  const {
    mutate: mutateAddDevice,
    isSuccess: isSuccessAddDevice,
    isError: isErrorAddDevice,
  } = useAddDevice();

  const { mutate: mutateDeleteDevice } = useDeleteDevice();

  if (isSuccessEditDevice || isSuccessAddDevice) setAddNewDevice(false);

  const handleDeleteDevice = (deleteId: { id?: number }) => {
    if (deleteId.id) mutateDeleteDevice({ id: deleteId.id });
    else setAddNewDevice(false);
  };

  return (
    <Formik
      initialValues={device}
      onSubmit={(values) => {
        if (values.id) mutateEditDevice(values);
        else mutateAddDevice(values);
      }}
      validationSchema={UncannyDeviceSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
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
                  onBlur={handleBlur}
                />
                <span className="text-red-400 text-sm">
                  {touched.label && errors.label}
                </span>
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
                  onBlur={handleBlur}
                />
                <span className="text-red-400 text-sm">
                  {touched.ip && errors.ip}
                </span>
              </div>
              <div className="mb-2 w-full">
                <SectionInputField
                  type="number"
                  name="port"
                  id="port"
                  label="Port"
                  value={values.port}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="text-red-400 text-sm">
                  {touched.port && errors.port}
                </span>
              </div>
              <div className="mb-2 w-full">
                <SectionInputField
                  type="number"
                  name="dashboardPort"
                  id="dashboardPort"
                  label="Dashboard Port"
                  value={values.dashboardPort}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <span className="text-red-400 text-sm">
                  {touched.dashboardPort && errors.dashboardPort}
                </span>
              </div>
            </div>
            <div className="flex gap-2 mt-7">
              <Button type="submit" btnType="save">
                Save
              </Button>
              <Button
                id={values.id && values.id}
                type="button"
                btnType="delete"
                handleClick={handleDeleteDevice}
              >
                Delete
              </Button>
            </div>
          </div>
          {isSuccessAddDevice && (
            <Message message="Added device" messageType="success" />
          )}

          {isErrorAddDevice && (
            <Message message="Failed to add device" messageType="failed" />
          )}
        </form>
      )}
    </Formik>
  );
};

export default UncannyDevice;
