import Dropdown from "./DropDown-menu";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header>
      <nav className="px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center bg-[#D9D9D9]">
            <img src="/logo.png" width={140} height={140} alt="logo" />
          </div>
          <div className="flex items-end gap-8">
            <Button className="h-full border border-white bg-white text-black hover:bg-white">
              Generate
            </Button>
            <Button className="h-full border border-white bg-white text-black hover:bg-white">
              Upload
            </Button>
            <Dropdown />
          </div>
        </div>
      </nav>
    </header>
  );
}
