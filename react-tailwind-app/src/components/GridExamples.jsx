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
        <div class="grid grid-cols-subgrid gap-4 col-span-3">
          <div class="col-start-2 w-[200px] hover:bg-red-400 bg-red-500 p-4 m-0 rounded-md">
            06
          </div>
          <div class="col-start-3 w-[200px] hover:bg-yellow-400 bg-yellow-500 p-4 m-0 rounded-md">
            07
          </div>
        </div>
      </div>
    </>
  );
}
