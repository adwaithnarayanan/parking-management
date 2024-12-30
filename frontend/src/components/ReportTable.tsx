import { ReportType } from "../../types";

const tableHead = [
  "Vehicle Category",
  "Vehicle Number",
  "Tag No",
  "Entry Gate",
  "Exit Gate",
  "Entry Time",
  "Exit Time",
  "Duration",
  "Validity Status",
];

type ReportTablePropsType = {
  reports: ReportType[] | undefined;
};

const ReportTable = ({ reports }: ReportTablePropsType) => {
  return (
    <div className=" ">
      <table className="w-full">
        <thead className="bg-blue-950 text-white">
          <tr>
            {tableHead.map((head) => (
              <th
                key={head}
                className={`font-semibold text-sm text-left px-2 py-1 w-fit border-r border-r-slate-400 ${
                  head === "Vehicle Category" || head === "Validity Status"
                    ? "w-1/12"
                    : ""
                }`}
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-gray-200">
          {reports &&
            reports.map((report: ReportType, idx) => (
              <tr key={idx} className="py-2">
                {Object.keys(report).map((key) => (
                  <td
                    className="px-2 py-1 pt-2 border-r-2 border-r-slate-100"
                    key={key}
                  >
                    {(report as any)[key] ? (report as any)[key] : "-"}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
