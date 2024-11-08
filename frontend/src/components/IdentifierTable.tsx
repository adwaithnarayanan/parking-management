import { IdentifierType } from "../../types";
import IdentifierTableRow from "./IdentifierTableRow";

type IdentifierTablePropsType = {
  tableColHeadings: { item: string }[];
  values: IdentifierType[];
};

export const IdentifierTable = ({
  tableColHeadings,
  values,
}: IdentifierTablePropsType) => {
  const identifiers = values.map((value) => ({
    ...value,
    identifierType: value.type === "RF" ? "rfid" : "licensePlateType",
  }));

  return (
    <>
      <div className="shadow-md overflow-hidden bg-white">
        <div className="flex flex-col overflow-hidden bg-white">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 inline-block min-w-full sm:px-6 lg:px-8">
            <table className="min-w-full">
              <thead className="border-b bg-slate-200">
                <tr>
                  {tableColHeadings.map((colHeading) => (
                    <th
                      key={colHeading.item}
                      scope="col"
                      className={`text-sm font-medium text-gray-900 px-6 py-3 text-left ${
                        colHeading.item === "#" ? "w-2" : "w-80"
                      }`}
                    >
                      {colHeading.item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {identifiers.map((value, idx) => (
                  <tr key={idx}>
                    <IdentifierTableRow
                      value={value}
                      key={value.id}
                      idx={idx + 1}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
