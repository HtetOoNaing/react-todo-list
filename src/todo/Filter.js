import React from "react";

const Filter = ({
  showData,
  filter,
  setFilter,
  handleOnFilterData,
  categories,
}) => {
  const handleOnChange = (e) => {
    let { name, value, checked, type } = e.target;
    setFilter((filter) => ({
      ...filter,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (name !== "search") {
      handleOnFilterData(
        {
          ...filter,
          [name]: type === "checkbox" ? checked : value,
        },
        name
      );
    } else if (value === "") {
      handleOnFilterData(
        {
          ...filter,
          [name]: type === "checkbox" ? checked : value,
        },
        "showall"
      );
    }
  };
  const handleOnSearch = (e) => {
    e.preventDefault();
    if (filter.search) {
      handleOnFilterData(filter, "search");
    }
  };
  return (
    <React.Fragment>
      <form onSubmit={handleOnSearch}>
        <div className="flex flex-wrap md:flex-no-wrap items-center -mx-1">
          <div className="w-auto p-1">
            <div className="relative">
              <select
                name="category"
                value={filter.category}
                onChange={handleOnChange}
                className="bg-white pl-4 pr-10 py-2 leading-5 w-full rounded-lg border border-gray-400 placeholder-gray-500 shadow-sm focus:outline-none focus:border-blue-500 appearance-none"
              >
                <option value="All">All</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                <svg
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-auto p-1">
            <input
              type="search"
              name="search"
              value={filter.search}
              onChange={handleOnChange}
              placeholder="Search"
              className="bg-white px-4 py-2 leading-5 w-full rounded-lg border border-gray-400 placeholder-gray-500 shadow-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="w-auto p-1">
            <button
              type="submit"
              className="w-auto px-4 py-2 leading-5 bg-blue-500 text-white rounded-lg shadow-sm text-sm font-medium border border-transparent hover:opacity-75 focus:outline-none"
            >
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="w-full text-right px-4 p-2">
        <div className="inline-flex items-center">
          <input
            type="checkbox"
            name="done"
            checked={filter.done}
            onChange={handleOnChange}
            id="done"
          />
          <label htmlFor="done" className="text-gray-800 text-sm ml-1">
            Checked
          </label>
        </div>
        <div className="inline-flex items-center ml-3">
          <input
            type="checkbox"
            name="undone"
            checked={filter.undone}
            onChange={handleOnChange}
            id="undone"
          />
          <label htmlFor="undone" className="text-gray-800 text-sm ml-1">
            Unchecked
          </label>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Filter;
