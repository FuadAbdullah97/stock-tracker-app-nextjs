"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

function UserDropdown() {

    const router =  useRouter()
    const handleSignOut = async () => {
        router.push("/sign-in");
    }
    const user = {name: 'John', email : 'john@project.com'}

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"ghost"} className={'flex items-center gap-3 hover:text-yellow-500'}>
                    <Avatar className={"h-8 w-8"}>
                        {/*<AvatarImage src="https://github.com/shadcn.png" />*/}
                        <AvatarFallback className={"bg-yellow-500 text-yellow-900 text-sm font-bold"}>
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <div className={"flex relative items-center gap-3 py-2 cursor-pointer"}>

                            <Avatar className={"h-8 w-8"}>
                                {/*<AvatarImage src="https://github.com/shadcn.png" />*/}
                                <AvatarFallback className={"bg-yellow-500 text-yellow-900 text-sm font-bold"}>
                                    {user.name[0]}
                                </AvatarFallback>
                            </Avatar>

                        <div className={"flex flex-col gap-0"}>
                            <p className={"font-medium "}>{user.name}</p>
                            <p className={"font-light"}>{user.email}</p>
                        </div>

                    </div>
                </DropdownMenuItem>

                <DropdownMenuSeparator className={"bg-gray-600"} />
                <DropdownMenuItem className={"text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer"}>Logout</DropdownMenuItem>
                <div className={"lg:hidden md:flex-col"}>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown
