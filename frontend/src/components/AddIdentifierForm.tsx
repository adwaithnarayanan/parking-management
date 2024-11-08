import { useRef, useState } from "react";
import SectionInputField from "./SectionInputField";
import { Formik } from "formik";
import { IdentifierSchema } from "../validationSchamas/schema";
import { IdentifierType, InitialIdentifierType } from "../../types";
import Message from "./Message";

type AddIdentifierFormPropsType = {
  edit: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
  initialValues: InitialIdentifierType;
  handleSubmitForm: (
    identifierObj: IdentifierType | InitialIdentifierType
  ) => void;

  isError?: Error | null;
};

const AddIdentifierForm = ({
  edit,
  setShowForm,
  initialValues,
  handleSubmitForm,
  isError,
}: AddIdentifierFormPropsType) => {
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
              initialValues={initialValues}
              onSubmit={(values) => {
                handleSubmitForm(values);
              }}
              validationSchema={IdentifierSchema}
            >
              {({
                values,
                touched,
                errors,
                handleSubmit,
                handleBlur,
                handleChange,
              }) => (
                <form
                  action="#"
                  onSubmit={handleSubmit}
                  className="flex flex-col"
                >
                  <span className="mb-2 text-lg">Add Identifier</span>
                  <div className="mb-4">
                    <div className="text-gray-600 text-sm w-full mb-2">
                      Identifier Type
                    </div>
                    <select
                      id="identifierType"
                      name="identifierType"
                      className="px-2 w-full py-1 border-2"
                      value={values.identifierType}
                      onChange={handleChange}
                      disabled={edit}
                    >
                      <option value="licensePlateType">License plate</option>
                      <option value="rfid">RFID</option>
                    </select>
                    <span className="text-red-400 text-sm">
                      {touched.identifierType && errors.identifierType}
                    </span>
                  </div>
                  {values.identifierType === "rfid" && (
                    <div className="mb-4">
                      <SectionInputField
                        type="text"
                        id="identifierId"
                        label="RFID Tag *"
                        name="identifierId"
                        placeholder="RFID Tag"
                        onBlur={handleBlur}
                        value={values.identifierId!}
                        onChange={handleChange}
                      />
                      <span className="text-red-400 text-sm">
                        {touched.identifierId && errors.identifierId}
                      </span>
                    </div>
                  )}
                  <div className="mb-4">
                    <SectionInputField
                      type="text"
                      id="licensePlate"
                      label="License Plate *"
                      name="licensePlate"
                      placeholder="License Plate"
                      onBlur={handleBlur}
                      value={values.licensePlate}
                      onChange={handleChange}
                    />
                    <span className="text-red-400 text-sm">
                      {touched.licensePlate && errors.licensePlate}
                    </span>
                  </div>
                  <div className="mb-4">
                    <SectionInputField
                      type="text"
                      id="parkingId"
                      label="Parking ID"
                      name="parkingId"
                      placeholder="Parking ID"
                      onBlur={handleBlur}
                      value={values.parkingId!}
                      onChange={handleChange}
                    />
                    <span className="text-red-400 text-sm">
                      {touched.parkingId && errors.parkingId}
                    </span>
                  </div>
                  <div className="mb-4">
                    <SectionInputField
                      type="text"
                      id="organizationName"
                      label="Organization Name"
                      name="organizationName"
                      placeholder="Organization Name"
                      onBlur={handleBlur}
                      value={values.organizationName!}
                      onChange={handleChange}
                    />
                    <span className="text-red-400 text-sm">
                      {touched.organizationName && errors.organizationName}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="text-gray-600 text-sm w-full mb-2">
                      Vehicle Type *
                    </div>

                    <select
                      id="vehicleType"
                      name="vehicleType"
                      className="px-2 w-full py-1 border-2"
                      value={values.vehicleType}
                      onChange={handleChange}
                    >
                      <option value="select">Select</option>
                      <option value="2w">2w</option>
                      <option value="4w">4w</option>
                    </select>
                    <span className="text-red-400 text-sm">
                      {touched.vehicleType && errors.vehicleType}
                    </span>
                  </div>

                  <div className="mb-4">
                    <SectionInputField
                      type="text"
                      id="ownerName"
                      label="Owner name (optional)"
                      name="ownerName"
                      placeholder="Owner name (optional)"
                      onBlur={handleBlur}
                      value={values.ownerName!}
                      onChange={handleChange}
                    />
                    <span className="text-red-400 text-sm">
                      {touched.ownerName && errors.ownerName}
                    </span>
                  </div>

                  <div className="mb-4">
                    <SectionInputField
                      type="text"
                      id="ownerEmail"
                      label="Owner email (optional)"
                      name="ownerEmail"
                      placeholder="Owner email (optional)"
                      onBlur={handleBlur}
                      value={values.ownerEmail!}
                      onChange={handleChange}
                    />
                    <span className="text-red-400 text-sm">
                      {touched.ownerEmail && errors.ownerEmail}
                    </span>
                  </div>

                  <div className="mb-4">
                    <SectionInputField
                      type="date"
                      id="validFrom"
                      label="Valid from (optional)"
                      name="validFrom"
                      placeholder="Valid From"
                      onBlur={handleBlur}
                      value={values.validFrom!}
                      onChange={handleChange}
                    />
                    <span className="text-red-400 text-sm">
                      {touched.validFrom && errors.validFrom}
                    </span>
                  </div>
                  <div className="mb-4">
                    <SectionInputField
                      type="date"
                      id="validUpTo"
                      label="Valid up to (optional)"
                      name="validUpTo"
                      placeholder="Valid Up to"
                      onBlur={handleBlur}
                      value={values.validUpTo!}
                      onChange={handleChange}
                    />
                    <span className="text-red-400 text-sm">
                      {touched.validUpTo && errors.validUpTo}
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
          {isError && (
            <Message message="Unable to  add Identifier" messageType="failed" />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddIdentifierForm;
