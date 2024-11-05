import Cameras from "./Cameras";

const TicketVendingMachine = () => {
  return (
    <section className="bg-white p-5 rounded-md shadow-sm border mt-4">
      <h1 className="text-lg mb-4">Ticket Vending Machines</h1>
      <Cameras deviceId={0}>
        Add a new TVM
        <span className="bg-blue-500 text-white py-0.5 px-2 ml-2 rounded-3xl hover:bg-blue-600">
          +
        </span>
      </Cameras>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2 mt-4">
        <Cameras deviceId={0}>
          <span className="text-gray-500 mr-1">#1</span>
          test name 101
        </Cameras>
        <Cameras deviceId={0}>
          <span className="text-gray-500 mr-1">#2</span>
          test name 102
        </Cameras>
      </div>
    </section>
  );
};

export default TicketVendingMachine;
