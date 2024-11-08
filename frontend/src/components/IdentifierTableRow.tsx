import { useState } from "react";
import { IdentifierType, InitialIdentifierType } from "../../types";
import TableCell from "./TableCell";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIdentifierForm from "./AddIdentifierForm";
import { useEditIdentifier } from "../hooks/APIs/useEditIdentifier";
import { useDeleteIdentifier } from "../hooks/APIs/useDeleteIdentifier";

type IdentifierTableRowPropsType = {
  value: IdentifierType & { identifierType: string };
  idx: number;
};

const IdentifierTableRow = ({ value, idx }: IdentifierTableRowPropsType) => {
  const [showForm, setShowForm] = useState(false);

  const { mutate: mutateUseEditIdentifier } = useEditIdentifier();
  const { mutate: mutateUseDeleteIdentifier } = useDeleteIdentifier();

  const handleEditIdentifier = (
    identifierObj: IdentifierType | InitialIdentifierType
  ) => {
    mutateUseEditIdentifier(identifierObj);
    setShowForm(false);
  };

  const handleDeleteIdentifier = () => {
    console.log(value.id);
    mutateUseDeleteIdentifier({ id: value.id! });
  };

  return (
    <>
      <TableCell type="id">{idx}</TableCell>
      <TableCell>{value.identifierId}</TableCell>
      <TableCell>{value.parkingId}</TableCell>
      <TableCell>{value.organizationName}</TableCell>
      <TableCell>{value.vehicleType}</TableCell>
      <TableCell>{value.ownerName}</TableCell>
      <TableCell>{value.ownerEmail}</TableCell>
      <TableCell>{value.validFrom}</TableCell>
      <TableCell>{value.validUpTo}</TableCell>
      <TableCell>{value.type}</TableCell>
      <TableCell type="button">
        <button onClick={() => setShowForm(true)}>
          <EditIcon />
        </button>
        <button onClick={handleDeleteIdentifier}>
          <DeleteIcon color="error" />
        </button>
      </TableCell>

      {showForm && (
        <AddIdentifierForm
          edit={true}
          setShowForm={setShowForm}
          initialValues={value}
          handleSubmitForm={handleEditIdentifier}
        />
      )}
    </>
  );
};

export default IdentifierTableRow;
