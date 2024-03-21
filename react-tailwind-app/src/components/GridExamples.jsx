export default function GridExamples() {
  return (
    <>
      {/* GRID TEMPLATE COLUMNS */}
      <div className="flex flex-row font-extrabold text-3xl text-slate-800 justify-center mt-6">
        Grid Template Columns
      </div>
      <div className="flex flex-row font-extrabold text-1xl text-slate-600 justify-center">
        Use the grid-cols-n utilities to create grids with n equally sized
        columns.
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="w-[200px] hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md">
          01
        </div>
        <div className="w-[200px] hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md">
          02
        </div>
        <div className="w-[200px] hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md">
          03
        </div>
        <div className="w-[200px] hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md">
          04
        </div>
      </div>

      {/* SUBGRID */}
      <div className="flex flex-row font-extrabold text-3xl text-slate-800 justify-center mt-6">
        Subgrid
      </div>
      <div className="flex flex-row font-extrabold text-1xl text-slate-600 justify-center">
        Use the grid-cols-subgrid utility to adopt the column tracks defined by
        the item's parent.
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className=" hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md">
          01
        </div>
        <div className=" hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md">
          02
        </div>
        <div className=" hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md">
          03
        </div>
        <div className=" hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md">
          04
        </div>
        <div class="grid grid-cols-subgrid gap-4 col-span-3">
          <div class="col-start-2 hover:bg-red-400 bg-red-500 p-4 m-0 rounded-md">
            06
          </div>
          <div class="col-start-3 hover:bg-yellow-400 bg-yellow-500 p-4 m-0 rounded-md">
            07
          </div>
        </div>
      </div>

      {/* GRID COL SPAN */}
      <div className="flex flex-row font-extrabold text-3xl text-slate-800 justify-center mt-6">
        COL SPAN
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md">
          01 - Use the col-span-n utilities to make an element span n columns.
        </div>
        <div className=" hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md">
          02
        </div>
        <div className=" hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md">
          03
        </div>
        <div className=" hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md">
          04
        </div>
      </div>

      {/* GRID START END */}
      <div className="flex flex-row font-extrabold text-3xl text-slate-800 justify-center mt-6">
        COL START END
      </div>
      <div className="flex flex-row font-extrabold text-1xl text-slate-600 justify-center mt-0 px-6">
        Use the col-start-n and col-end-n utilities to make an element start or
        end at the nth grid line. These can also be combined with the col-span-n
        utilities to span a specific number of columns.
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-start-2 col-span-4 hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md">
          01
        </div>
        <div className="col-start-1 col-end-3 hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md">
          02
        </div>
        <div className="col-end-6 hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md">
          03
        </div>
        <div className="col-start-1 col-end-7 hover:bg-blue-200 bg-blue-500 p-4 m-0 rounded-md">
          04
        </div>
      </div>
    </>
  );
}
