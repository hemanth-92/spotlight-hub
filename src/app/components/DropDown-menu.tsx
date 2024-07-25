import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function Dropdown() {
  return (
    <div className="border-white bg-[#A3A3A3] p-0 text-white">
      <DropdownMenu>
        <DropdownMenuTrigger className="px-2 text-4xl text-black">
          ≡
        </DropdownMenuTrigger>
        <DropdownMenuContent className="absolute right-0">
          <DropdownMenuLabel>DashBoard</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>My Account</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Docs</DropdownMenuItem>
          <DropdownMenuItem>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
