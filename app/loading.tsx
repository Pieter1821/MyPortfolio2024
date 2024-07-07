"use client";
import { Spinner } from "@nextui-org/spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 dark:bg-gray-800">
      <div className="w-[150px] h-[150px] bg-white dark:bg-gray-700 rounded-full flex items-center justify-center">
        <Spinner aria-label="Loading..." size="lg" className="text-gray-900 dark:text-gray-200" />
      </div>
    </div>
  );
}