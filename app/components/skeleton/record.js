import React from "react";
import {Skeleton} from "@nextui-org/react";

export default function RecordSkeleton() {
  return (
    <div className=" w-full flex items-center gap-3 ">  
      <div className="w-full flex flex-row gap-2 my-3">
        <Skeleton className="h-5 w-2/5 rounded-lg mx-4"/>
        <Skeleton className="h-5 w-1/5 rounded-lg mx-4"/>
        <Skeleton className="h-5 w-1/5 rounded-lg mx-4"/>
        <Skeleton className="h-5 w-1/5 rounded-lg mx-4"/>
        <Skeleton className="h-5 w-1/5 rounded-lg mx-4"/>
        <Skeleton className="h-5 w-1/5 rounded-lg mx-4"/>
      </div>
    </div>
  );
}
