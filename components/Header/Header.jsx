import UserMenu from "./UserMenu.jsx";
export default function Header() {
  return (
    <header className="w-full flex bg-[var(--roxo)] py-2 h-12 mt-0 " >
      <div className="left  text-4m text-[#FFF] flex justify-between w-1/2 ml-8">
        <div className=" rounded-full w-2 md:hidden flex items-center justify-end p-4">


            <UserMenu />
   
        </div>
      </div>
      <div className="right justify-items-end w-1/2">
        <UserMenu />
      </div>
    </header>
  );
}