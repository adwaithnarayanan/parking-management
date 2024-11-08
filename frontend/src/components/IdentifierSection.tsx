import { useEffect, useState } from "react";
import Button from "./Button";
import { IdentifierTable } from "./IdentifierTable";
import { IdentifierType, InitialIdentifierType } from "../../types";
import AddIdentifierForm from "./AddIdentifierForm";
import { useAddIdentifier } from "../hooks/APIs/useAddIdentifier";

const identifiersTableCols = [
  { item: "#" },
  { item: "Identifier ID" },
  { item: "Parking ID" },
  { item: "Organization" },
  { item: "Vehicle Type" },
  { item: "Owner Name" },
  { item: "Owner Email" },
  { item: "Valid From" },
  { item: "Valid To" },
  { item: "Type" },
  { item: "Actions" },
];

const initialIdentifierValues: InitialIdentifierType = {
  identifierType: "licensePlateType",
  identifierId: "",
  licensePlate: "",
  parkingId: "",
  organizationName: "",
  vehicleType: "select",
  ownerName: "",
  ownerEmail: "",
  validFrom: "",
  validUpTo: "",
};

type IdentifierSectionPropsType = {
  identifiers: IdentifierType[] | undefined;
};

export const IdentifierSection = ({
  identifiers,
}: IdentifierSectionPropsType) => {
  const [searchText, setSearchText] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [identifiersData, setIdentifiersData] = useState<IdentifierType[]>([]);

  const {
    mutate,
    isSuccess: isSuccessAddIdentifier,
    isError: isErrorAddIdentifier,
    error: errorAddIdentifier,
  } = useAddIdentifier();

  console.log("***", isSuccessAddIdentifier);
  console.log("###", isErrorAddIdentifier, 342423, "@@@", errorAddIdentifier);

  const handleAddIdentifier = (
    identifierData: InitialIdentifierType | IdentifierType
  ) => {
    mutate(identifierData);
    if (isSuccessAddIdentifier) setShowForm(false);
  };

  useEffect(() => {
    if (searchText.trim() && identifiers) {
      setIdentifiersData(
        identifiers!.filter(
          (identifier) =>
            identifier
              .identifierId!.toLowerCase()
              .slice(0, searchText.length) === searchText
        )
      );
    } else if (identifiers) {
      setIdentifiersData([...identifiers]);
    }
  }, [searchText]);

  useEffect(() => {
    if (identifiers)
      setIdentifiersData(
        identifiers.map((identifier) => ({
          ...identifier,
        }))
      );
  }, [identifiers]);

  return (
    <>
      <div className="flex items-center justify-between">
        <Button
          btnType="addIdentifier"
          type="button"
          handleClick={() => setShowForm(true)}
        >
          Add Identifier
        </Button>
        <div className="flex justify-center">
          <div className="xl:w-96">
            <div className="relative items-stretch w-full mb-4 flex">
              <input
                type="search"
                className="relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-slate-300 focus:outline-none"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button className="px-6 py-1 bg-slate-300 text-gray-600 font-medium text-xs leading-tight uppercase rounded-r hover:bg-slate-400 transition duration-150 ease-in-out flex items-center">
                <img
                  src="./src/assets/svgs/searchIcon.svg"
                  alt="search"
                  className="h-[18px] w-[18px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <IdentifierTable
        tableColHeadings={identifiersTableCols}
        values={identifiersData}
      />
      {showForm && (
        <AddIdentifierForm
          edit={false}
          setShowForm={setShowForm}
          initialValues={initialIdentifierValues}
          handleSubmitForm={handleAddIdentifier}
          isError={errorAddIdentifier}
        />
      )}
    </>
  );
};
