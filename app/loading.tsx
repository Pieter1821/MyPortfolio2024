"use client"
import { Spinner } from "@nextui-org/spinner";


export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-white dark:bg-black">

      <Spinner aria-label="Loading..." />

    </div>
  );
}
