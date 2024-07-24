import Dropdown from "./DropDown-menu";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 shadow">
      <nav className="border-gray-200 bg-white px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src="/logo.png" width={140} height={140} alt="logo" />
          </div>
          <div className="flex items-end gap-8">
            <Button className="border border-white h-full">upload</Button>
            <Button className="border border-white h-full">Generate</Button>
            <Dropdown />
          </div>
        </div>
      </nav>
    </div>
  );
}
