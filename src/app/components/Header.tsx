import Dropdown from "./DropDown-menu";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="bg-gray-600 shadow">
      <nav className="border-gray-200 bg-white px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <img src="/logo.png" width={140} height={140} alt="logo" />
          </div>
          <div className="flex items-end gap-8">
            <Button className="h-full border border-white">Generate</Button>
            <Button className="h-full border border-white">Upload</Button>
            <Dropdown />
          </div>
        </div>
      </nav>
    </div>
  );
}
