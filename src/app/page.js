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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

import { Card, CardContent, CardTitle } from "@/components/ui/card";

import Image from "next/image";

import {
  Search,
  Bell,
  BellDot,
  Mail,
  MailPlus,
  CirclePlus,
} from "lucide-react";
import next from "next";

export default function Home() {
  return (
    <div class="flex">
      <div class="bg-gray-100 h-screen w-[380px] flex items-start justify-center pt-4">
        <img width="90px" src="next.svg" alt="logo" />
      </div>

      <div class="flex flex-col w-full">
        <div class="w-full flex p-4">
          <div className="flex-1 flex border rounded-md">
            <Button>
              <Search class="" />
            </Button>

            <Input
              className="border-none outline-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              type="search"
              placeholder="Search"
            />
          </div>

          <div className="">
            <Button>
              <Bell />
            </Button>

            <Button>
              <Mail />
            </Button>
          </div>

          <div className="flex">
            <Avatar>
              <AvatarImage src="https:github.com/JuanMeireles.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex">
            <DropdownMenu>
              <DropdownMenuTrigger>Juan Meireles</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div class="ml-5 mb-4 bg-neutral-400">
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

        <h6 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 bg-red-700  ml-5 mb-10 ">
          Project Name
        </h6>

        <div class="bg-slate-800  w-full h-[125px] grid grid-cols-4 gap-4 items-start ">
          <div className="bg-card rounded mt-4 ml-4 ">
            <Card>
              <CardContent>
                <p>Date Added: 12/04/2021 </p>
                <p>Deadline: 21/04/2021</p>
                <p>Participants: Adyl,Azhar,Arthur</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded mt-4 ml-4 col-span-2 ">
            <Card>
              <CardContent>
                {" "}
                Lorem ipsum dolor sit amet. Qui culpa commodi est quia itaque et
                voluptatibus ipsum. Aut facere itaque eos distinctio iste qui
                temporibus incidunt ad aperiam dolorem?
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded mt-4 ml-4 mr-4 ">
            <Card>
              <CardContent>
                {" "}
                <p>All tasks: 6 </p>
                <p>Done:: 0 </p>
                <p>Frozen: 1</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div class="bg-slate-500  w-full h-0 grid grid-cols-4 gap-4  ">
          <div className="flex font-mono text-2xl font-bold justify-between  ">
            <h1>To do </h1>
            <Button>
              <CirclePlus />
            </Button>
          </div>

          <div>
            <h1 class="flex font-mono text-2xl font-bold justify-between ">
              In progress
            </h1>
          </div>

          <div>
            <h1 class="font-mono text-2xl font-bold ">Closed</h1>
          </div>

          <div className="mr-4">
            <h1 class="font-mono text-2xl font-bold ">Frozen</h1>
          </div>

          <ul class="bg-gray-400 p-2 rounded">
            <Card classname="bg-card">
              <CardContent>
                <li>
                  CRM System design{" "}
                  <Badge className="bg-orange-300 ml-7 ">Medium</Badge>
                </li>
                <p>Participant</p>
                <p>Date Added:12/04/2111 </p>
              </CardContent>
            </Card>

            <div className="mt-3">
              <Card classname="bg-card ">
                <CardContent>
                  <li>
                    Segundo Card To do{" "}
                    <Badge className="bg-green-300 ml-7">Low</Badge>
                  </li>
                  <p>Participant</p>
                  <p>Date Added:12/04/21 </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-3">
              <Card classname="bg-card ">
                <CardContent>
                  <li>
                    Terceiro card{" "}
                    <Badge className="bg-red-300 ml-7">High</Badge>
                  </li>
                  <p>Participant</p>
                  <p>Date Added:12/04/21 </p>
                </CardContent>
              </Card>
            </div>
          </ul>

          <ul class="bg-gray-400 p-2 rounded">
            <Card classname="bg-card ">
              <CardContent>
                <li>
                  CRM System design{" "}
                  <Badge className="bg-orange-300 ml-7">Medium</Badge>
                </li>
                <p>Participant</p>
                <p>Date Added:12/04/21 </p>
              </CardContent>
            </Card>

            <div className="mt-3">
              <Card classname="bg-card ">
                <CardContent>
                  <li>
                    Segundo Card To do{" "}
                    <Badge className="bg-green-300 ml-7">Low</Badge>
                  </li>
                  <p>Participant</p>
                  <p>Date Added:12/04/21 </p>
                </CardContent>
              </Card>
            </div>
          </ul>

          <ul class="bg-gray-400 p-2 rounded">
            <Card classname="bg-card ">
              <CardContent>
                <li>
                  Teste <Badge className="bg-orange-300 ml-7">Medium</Badge>
                </li>
                <p>Teste</p>
                <p>Teste </p>
              </CardContent>
            </Card>
          </ul>

          <ul class="bg-gray-400 p-2 rounded mr-4">
            <Card classname="bg-card ">
              <CardContent>
                <li>
                  Segundo Card To do{" "}
                  <Badge className="bg-green-300 ml-7">Low</Badge>
                </li>
                <p>Participant</p>
                <p>Date Added:12/04/21 </p>
              </CardContent>
            </Card>
          </ul>
        </div>
      </div>
    </div>
  );
}
