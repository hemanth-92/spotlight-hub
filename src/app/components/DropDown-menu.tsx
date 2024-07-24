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
    <div className="flex items-center bg-black p-2 text-white border border-white rounded-md">
      <DropdownMenu>
        <DropdownMenuTrigger className="text-4xl" >≡</DropdownMenuTrigger>
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
