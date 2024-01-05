import ProductService from "../../service/ProductService";
import { useEffect, useState, useCallback } from "react";
import ItemSearch from "./ItemSearch";

export default function Search() {

  const [product, setProduct] = useState([]);
  const [changValue, setChangValue] = useState("");
  const [finish , setFinish] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      try {
        let temp = await ProductService.getAllProducts();
        setProduct(temp);
      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  },[]);
  
  const handleMoutLeave = () => {
    if(changValue === "") {
      setChangValue("");
    }
  }
  const handleSearch = ((value) => {
    const filteredResults = product.filter((item) => item.product_name.toLowerCase().includes(value));
    if(filteredResults.length > 0){
      setFinish(filteredResults);
    }
    setChangValue(value);
  }) ;
  return (
    <div>
      <form className=" ">
        <div className="flex relative bg-white rounded-md ">
          <button className="bg-white rounded-md">
            <div className=" inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </button>

          <div className="relative w-full rounded-md overflow-hidden">
            <input
              type="search"
              className=" p-2.5 w-full z-20 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Search"
              onChange={(e) => handleSearch(e.target.value)}
              required
              onMouseLeave={handleMoutLeave}
            />

            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-[#DA251E] hover:bg-gray-400 hover:text-white"
            >
              Search
            </button>
           
          </div>
          <div key={changValue} className={`${changValue.length > 0 ? 'block' : 'hidden'} result_search absolute top-full left-0 bg-white border border-red-200 px-2 py-3 shadow-2xl rounded-lg w-full`}>
              <ItemSearch key={finish} data={finish} search={changValue} />
            </div>
        </div>
      </form>
    </div>
  );
}
