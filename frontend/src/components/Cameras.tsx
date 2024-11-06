type Cameras = {
  children: React.ReactNode;
};

const Cameras = ({ children }: Cameras) => {
  return (
    <button className="cursor-pointer border-none">
      <div className="px-4 py-2 border border-primary-dark mb-2 rounded-md flex items-center h-12 bg">
        {children}
      </div>
    </button>
  );
};

export default Cameras;
