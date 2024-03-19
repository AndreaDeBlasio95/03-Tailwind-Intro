import React, { useState } from "react";

export default function FlexExamples() {
  return (
    <>
      {/* FLEX BASIS */}
      <div className="flex flex-row font-extrabold text-3xl text-slate-800 justify-center">
        Flex Basis
      </div>
      <div class="flex flex-row">
        <div class="basis-1/4 hover:basis-1/2 hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md">
          01
        </div>
        <div class="basis-1/4 bg-blue-400 p-2 m-0 rounded-md">02</div>
        <div class="basis-1/2 bg-blue-300 p-0 m-1 rounded-md">03</div>
      </div>

      {/* FLEX REVERSE */}
      <div className="flex flex-row font-extrabold text-3xl text-slate-800 justify-center">
        Flex Reverse
      </div>
      <div class="flex flex-row-reverse">
        <div class="hover:w-1/4 hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md">
          01
        </div>
        <div class="bg-blue-400 p-2 m-0 rounded-md">02</div>
        <div class="bg-blue-300 p-0 m-1 rounded-md">03</div>
      </div>

      {/* FLEX ROW -> FLEX COL */}
      <div className="flex flex-row font-extrabold text-3xl text-slate-800 justify-center">
        Flex Row to Flex Col
      </div>
      <div className="flex flex-row md:flex-col">
        <div class="hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md ">01</div>
        <div class="bg-blue-400 p-2 m-0 rounded-md">02</div>
        <div class="bg-blue-300 p-0 m-1 rounded-md">03</div>
      </div>

      {/* FLEX NOWRAP */}
      <div className="flex flex-row font-extrabold text-3xl text-slate-800 justify-center">
        Flex No Wrap
      </div>
      <div className="flex flex-nowrap">
        <div class="hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md w-[1000px] ">
          01
        </div>
        <div class="bg-blue-400 p-2 m-0 rounded-md w-[2000px] ">02</div>
        <div class="bg-blue-300 p-0 m-1 rounded-md w-[1000px]">03</div>
      </div>

      {/* FLEX WRAP */}
      <div className="flex flex-row font-extrabold text-3xl text-slate-800 justify-center">
        Flex Wrap
      </div>
      <div className="flex flex-wrap">
        <div class="hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md w-[550px] ">
          01
        </div>
        <div class="bg-blue-400 p-2 m-0 rounded-md w-[1250px] ">02</div>
        <div class="bg-blue-300 p-0 m-1 rounded-md w-[800px]">03</div>
      </div>
    </>
  );
}
