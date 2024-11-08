type TableCellPropsType = {
  type?: "button" | "id";
  children: React.ReactNode;
};

const TableCell = ({ type, children }: TableCellPropsType) => {
  return (
    <td
      className={`text-sm text-gray-700 px-6 py-2 text-left ${
        type && type === "button"
          ? "gap-2 flex"
          : type === "id"
          ? "w-2"
          : "w-80"
      }`}
    >
      {children}
    </td>
  );
};

export default TableCell;
