import React from "react";
import {Skeleton} from "@nextui-org/react";

export default function UserSkeleton() {
  return (
    <div className=" w-full flex items-center gap-2 m-4 ">
      <div>
        <Skeleton className="flex rounded-full w-10 h-10"/>
      </div>  
      <div className="w-2/6 flex flex-col gap-2 mx-0">
        <Skeleton className="h-4 w-1/2 rounded-lg"/>
        <Skeleton className="h-3 w-2/3 rounded-lg"/>
      </div>
      <div className="w-full flex flex-row gap-6 mr-6 ">
        <Skeleton className="h-4 w-1/3 rounded-lg"/>
        <Skeleton className="h-4 w-1/3 rounded-lg"/>
        <Skeleton className="h-4 w-1/3 rounded-lg"/>
      </div>
    </div>
  );
}
