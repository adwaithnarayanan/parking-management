type MessagePropType = {
  messageType: "success" | "failed";
  message: string;
};
const Message = ({ messageType, message }: MessagePropType) => {
  let color = "";
  if (messageType === "failed") color = "red";
  else if (messageType === "success") color = "green";
  return (
    <div className={`bg-${color}-100 rounded-md p-4`}>
      <div className="flex">
        <img src="./src/assets/svgs/info.svg" alt="info" />
        <div
          className={`ml-3 text-sm font-medium text-${color}-700 w-full flex items-center`}
        >
          <p>{message}</p>
        </div>
        <button
          type="button"
          className={`ml-auto mx-1.5 bg-${color}-100 text-${color}-500 rounded-md focus:ring-2 focus:ring-${color}-400 p-1.5 hover:bg-${color}-200 inline-flex h-8 w-8`}
        >
          <img src="./src/assets/svgs/closeIcon.svg" alt="close" />
        </button>
      </div>
    </div>
  );
};

export default Message;
