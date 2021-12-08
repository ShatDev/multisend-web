function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="www.google.com"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src="/images/logo/logo.png" alt="logo" height={32} width={32} />
          <span className="ml-3 text-xl">Multi Send</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="www.google.com" className="flex items-center mr-7 hover:text-gray-900">
            <img src="/images/choose_network.png" className="mr-2" alt="choose network" />
            <div className="text-sm font-semibold text-black">Choose network</div>
          </a>
        </nav>
        <button
          type="button"
          className="inline-flex items-center bg-gray-400 border-0 py-3 px-3 text-sm mt-4 md:mt-0 rounded-2xl text-white"
        >
          Connect Wallet
        </button>

        <a href="www.google.com" className="flex items-center hover:text-gray-900 ml-7">
          <img src="/images/profile_icon.png" alt="Profile network" className="h-14 w-14" />
        </a>
      </div>
    </header>
  );
}

export default Header;
