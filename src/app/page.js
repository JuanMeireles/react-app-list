import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Search, Bell, BellDot, Mail, MailPlus } from "lucide-react";

export default function Home() {
  return (
    <div class="flex">
      <div class="bg-gray-500 h-screen w-96 flex-shrink-0">
        <img width="250" src="next.svg" alt="a" />
      </div>

      <div class="flex flex-col w-full">
        <div class="bg-gray-600 h-24 w-5/6">
          <Input
            class="h-10 w-11/12 flex "
            type="search"
            placeholder="Search"
          />
          <Button>
            <Search class="" />
          </Button>

          <Button>
            <Bell />
          </Button>

          <Button>
            <Mail />
          </Button>

          <div class="flex">
            <Avatar>
              <AvatarImage src="https:github.com/JuanMeireles.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div class=" mt-10 ml-5 mb-4 bg-neutral-400">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/todo">ToDoshnik</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <h6 class="font-mono text-4xl bg-red-700  ml-5 mb-10 ">Project Name</h6>

        <div class="bg-slate-800  w-full h-full">
          <div class="bg-card rounded mt-4 ml-4 w-2/5 h-44"> teste</div>
        </div>
      </div>
    </div>
  );
}
