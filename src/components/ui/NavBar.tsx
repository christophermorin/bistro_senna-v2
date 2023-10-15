import Image from "next/image";

export function NavBar() {

  return (
    <div className="h-[42px] bg-black text-white w-full fixed z-30">
      {/* Mobile */}
      <nav className="flex justify-between items-center pl-[12px] w-full h-full sm:hidden">
        <Image
          src={"/images/hamburger-md.svg"}
          alt="Menu"
          width={36}
          height={36}
        />
      </nav>
      {/* Desktop */}
      <nav className="sm:justify-between sm:items-center sm:px-9 sm:w-full hidden sm:flex sm:h-full">
        <p className="font-bold text-2xl">Bistro Sena</p>
        <ul className="flex uppercase font-semibold gap-4 [&>*]:cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>Specials</li>
          <li>Reviews</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}