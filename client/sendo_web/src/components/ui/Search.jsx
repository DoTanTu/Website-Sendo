export default function Search() {
  return (
    <div>
      <form className="border rounded-md">
        <div class="flex ">
          <button>
            <div class=" inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </button>

          <div class="relative w-full">
            <input
              type="search"
              class=" p-2.5 w-full z-20 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Search"
              required
            />

            <button
              type="submit"
              class="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-[#DA251E] hover:bg-[#DA251E]/90 hover:text-white"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
