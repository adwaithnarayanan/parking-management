import { useRef } from "react";
import { useGetReport } from "../hooks/APIs/useGetReport";
import Button from "./Button";
import ReportTable from "./ReportTable";

const BASE_URL = "http://localhost:3001/report/";

const AccessReport = () => {
  const { data: report } = useGetReport();
  const tableRef = useRef<HTMLDivElement | null>(null);

  const startDate =
    report &&
    new Date(
      report?.data[0].entryTime
        ? report?.data[0].entryTime
        : report?.data[0].exitTime
    );
  const endDate =
    report &&
    new Date(
      report?.data[report.data.length - 1].entryTime
        ? report?.data[report.data.length - 1].entryTime
        : report?.data[report.data.length - 1].exitTime
    );

  const handleDownloadPdf = () => {
    // refetchDownloadPdf();

    const fileName = "report.pdf";
    const aTag = document.createElement("a");
    aTag.href = `${BASE_URL}downloadpdf`;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  const handleDownloadCsv = async () => {
    const fileName = "report.csv";
    const aTag = document.createElement("a");
    aTag.href = `${BASE_URL}downloadCsv`;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();

    // refetchDownloadCsv();
  };

  return (
    <div className="flex flex-col p-4 w-full">
      <div className="flex justify-between mb-2">
        <div className="flex-1 flex flex-col">
          <img
            src="src/assets/images/parkzeus-logo.png"
            alt="parking management"
            className="w-24"
          />
        </div>
        <div className="flex flex-col text-center flex-grow items-center justify-center">
          <h2 className="text-lg font-medium">Access Report</h2>
          <span className="text-sm">
            {startDate?.toDateString()} to {endDate?.toDateString()}
          </span>
        </div>
        <div className="h-full flex-1"></div>
      </div>
      <div ref={tableRef}>
        <ReportTable reports={report?.data} />
      </div>
      <div className="w-full flex items-center justify-center">
        <Button
          btnType="download"
          type="button"
          handleClick={handleDownloadPdf}
        >
          Download pdf
        </Button>
        <Button
          btnType="download"
          type="button"
          handleClick={handleDownloadCsv}
        >
          Download csv
        </Button>
      </div>
    </div>
  );
};

export default AccessReport;
