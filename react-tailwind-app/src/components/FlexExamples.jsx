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

      {/* FLEX INITIAL */}
      <div className="flex flex-row font-extrabold text-3xl text-slate-800 justify-center">
        Flex None, Initial, Flex-1 (ignore initial size), Auto (considering
        initial size)
      </div>
      <div className="flex">
        <div class="flex-none w-[200px] hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md ">
          01 - Use flex-none to prevent a flex item from growing or shrinking
        </div>
        <div class="flex-initial w-[300px] bg-blue-400 p-2 m-0 rounded-md ">
          02 - Use flex-initial to allow a flex item to shrink but not grow,
          taking into account its initial size
        </div>
        <div class="flex-1 w-[300px] bg-blue-300 p-0 m-1 rounded-md ">
          03 - Use flex-1 to allow a flex item to grow and shrink as needed,
          ignoring its initial size
        </div>
        <div class="flex-auto w-[300px] bg-blue-300 p-0 m-1 rounded-md ">
          04 - Use flex-auto to allow a flex item to grow and shrink, taking
          into account its initial size
        </div>
      </div>

      {/* FLEX GROW */}
      <div className="flex flex-row font-extrabold text-3xl text-slate-800 justify-center">
        Flex Grow
      </div>
      <div className="flex">
        <div class="grow hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md ">
          01 - Use grow to allow a flex item to grow to fill any available space
        </div>
        <div class="grow-0 w-[300px] bg-blue-400 p-2 m-0 rounded-md ">
          02 - Use grow-0 to prevent a flex item from growing
        </div>
        <div class="grow hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md ">
          03 - Use grow to allow a flex item to grow to fill any available space
        </div>
      </div>

      {/* FLEX SHRINK */}
      <div className="flex flex-row font-extrabold text-3xl text-slate-800 justify-center">
        Flex Shrink
      </div>
      <div className="flex">
        <div class="shrink hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md ">
          01 - Use shrink to allow a flex item to shrink if needed
        </div>
        <div class="shrink-0 w-[300px] bg-blue-400 p-2 m-0 rounded-md ">
          02 - Use shrink-0 to prevent a flex item from shrinking
        </div>
      </div>
    </>
  );
}
