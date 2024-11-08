import { useGetIdentifiers } from "../hooks/APIs/useGetIdentifiers";
import { IdentifierSection } from "./IdentifierSection";

const Identifiers = () => {
  const { data: identifiers } = useGetIdentifiers();

  return (
    <main className="overflow-y-auto overflow-x-hidden p-10 h-full">
      <IdentifierSection
        identifiers={identifiers?.data.map((identifier) => ({
          ...identifier,
        }))}
      />
    </main>
  );
};

export default Identifiers;
