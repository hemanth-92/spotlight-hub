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
    <div className="flex items-center rounded-md border border-white bg-black p-0.5 text-white">
      <DropdownMenu>
        <DropdownMenuTrigger className="px-3 text-2xl">≡</DropdownMenuTrigger>
        <DropdownMenuContent>
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
