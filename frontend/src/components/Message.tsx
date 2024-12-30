type MessagePropType = {
  messageType: "success" | "failed";
  message: string;
};
const Message = ({ messageType, message }: MessagePropType) => {
  let btnStyle = "";
  let textDark = "";
  let bg = "";
  if (messageType === "failed") {
    bg = "bg-red-100";
    textDark = "text-red-700";
    btnStyle = "bg-red-100 hover:bg-red-200  focus:ring-red-400 text-red-500 ";
  } else if (messageType === "success") {
    bg = "bg-green-100";
    textDark = "text-green-700";
    btnStyle =
      "bg-green-100 hover:bg-green-200  focus:ring-green-400 text-green-500 ";
  }

  return (
    <div className={`${bg} rounded-md p-4`}>
      <div className="flex">
        <img src="./src/assets/svgs/info.svg" alt="info" />
        <div
          className={`ml-3 text-sm font-medium  w-full flex items-center ${textDark}`}
        >
          <p>{message}</p>
        </div>
        <button
          type="button"
          className={`ml-auto mx-1.5 rounded-md focus:ring-2 p-1.5 inline-flex h-8 w-8 ${btnStyle}`}
        >
          <img src="./src/assets/svgs/closeIcon.svg" alt="close" />
        </button>
      </div>
    </div>
  );
};

export default Message;
