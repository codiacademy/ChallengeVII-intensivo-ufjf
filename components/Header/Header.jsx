import ButtonHeader from "./ButtonHeader.jsx";
import UserMenu from "./UserMenu.jsx";

export default function Header() {
  return (
    <header className="w-full h-12 flex justify-between items-center bg-[var(--roxo)] text-[#FFF]">
          <ButtonHeader  />
          <UserMenu />
    </header>
  );
}