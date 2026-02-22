import React from "react";

let Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-neutral-200 px-6 md:px-16 py-4 flex items-center justify-between z-50 animate-slideDown">

      {/* Left Links */}
      <div
        className="flex items-center font-bold space-x-8 text-sm tracking-wide text-neutral-700"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        <span className="cursor-pointer  hover:text-amber-400 transition">
          The House
        </span>

        <span className="cursor-pointer  hover:text-amber-400 transition">
          <a
  href="#products"
  className=""
>Collection</a>
        </span>
      </div>

      {/* Logo */}
      <div
        className="text-3xl md:text-3xl font-bold tracking-widest cursor-pointer text-neutral-900  hover:text-amber-400"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        PATOLA
      </div>

      {/* Right Bag Icon */}
      <div className="relative w-6 h-6 cursor-pointer">
        <div
          className="w-full h-full bg-no-repeat bg-contain "
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="%23000" d="M17.5 10H17V7A5 5 0 0 0 7 7v3h-.5A2.5 2.5 0 0 0 4 12.5v7A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-7a2.5 2.5 0 0 0-2.5-2.5ZM9 7c0-1.65 1.35-3 3-3s3 1.35 3 3v3H9V7Zm9 12.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v7Z"/></svg>')`
          }}
        />

        <div className="absolute -top-1 -right-2 bg-amber-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
          0
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
