import TicketVendingMachine from "./TicketVendingMachine.tsx";
import IntegrationSettings from "./IntegrationSettings.tsx";
import DeviceIntegration from "./DeviceIntegration.tsx";
// import CarridaDevice from "./CarridaDevice.tsx";
// import Message from "./Message.tsx";

//  { name: "carrida" }

const MainBody = () => {
  return (
    <main className="overflow-y-auto overflow-x-hidden p-10 h-full">
      <section>
        <DeviceIntegration />
        <TicketVendingMachine />
        <IntegrationSettings />
      </section>
    </main>
  );
};

export default MainBody;
