"use client";
import { ContentCard } from "@/components";
import { SearchIcon } from "@/components/icons";
import { useState } from "react";

export default function Home() {
  return (
    <main className="w-full h-[100vh] flex justify-center items-center transition-all duration-500">
      <div className="w-full max-w-6xl bg-secondary h-full bg- box-border p-4">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="px-4 pt-12 box-border">
            <div className="w-full max-w-xs flex flex-col gap-2">
              <h1 className="text-2xl font-bold">E - Al Qur`an</h1>
              <p className="text-sm text-ternary font-medium">
                “Sebaik-baik kalian adalah orang yang belajar Al-Qur`an dan
                mengajarkannya.” (HR. Tirmidzi)
              </p>
            </div>
          </div>
          {/* end header */}
          {/* Search box */}
          <div className="w-searchFormMobile h-searchFormMobile bg-white shadow-md shadow-[#7090b023] rounded-full flex px-5 items-center gap-3">
            <SearchIcon />
            <span className="text-xs font-medium text-ternary">
              Surat apa yang ingin kamu baca sekarang?
            </span>
          </div>
          {/* end searchbox */}
          {/* content */}
          <div className="grid grid-rows-1 gap-3">
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard />
          </div>
          {/* end content */}
        </div>
      </div>
    </main>
  );
}
