const Header = () => {
  return (
    <header className="relative z-10 py-4 bg-white shadow-md">
      <div className="flex gap-2">
        <div className="shadow-md"></div>
        <section className="flex gap-2 px-3 w-11/12 overflow-x-auto scrollbar-none"></section>
        <div className="container w-fit flex items-center justify-end h-full px-2 md:px-6 mx-auto text-purple-600">
          <div className="relative flex items-center gap-3">
            <div className="relative flex items-center gap-3">
              <button className="align-middle rounded-full bg-gray-200 w-full p-2">
                <img
                  src="/src/assets/svgs/user.svg"
                  className="w-5 h-5"
                  alt="user"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
