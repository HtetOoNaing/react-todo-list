import React from "react";

const AddModel = ({
  closeModel,
  newData,
  setNewData,
  handleOnAdd,
  handleOnUpdate,
}) => {
  if (newData.id) {
    console.log(newData);
  }

  const handleOnChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    let checked = target.checked;
    setNewData((newData) => ({
      ...newData,
      [name]: name === "completed" ? checked : value,
    }));
  };

  return (
    <div
      className={`modal overflow-scroll fixed w-full h-full top-0 left-0 z-50 `}
    >
      <div
        className="overlay min-h-full min-w-full flex items-center justify-center"
        style={{ backgroundColor: "#00000066" }}
      >
        <div className="bg-white rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/4">
          <div className="p-4 border-b flex justify-between">
            <h1 className="text-lg">{newData.id ? "Edit Item" : "Add Item"}</h1>
            <div
              onClick={closeModel}
              className="text-center px-2 inline-block cursor-pointer text-red-600 hover:text-red-900"
            >
              <svg
                className="svg-icon"
                style={{ width: "1em", height: "1em" }}
                viewBox="0 0 20 20"
              >
                <path
                  fill="#e53e3e"
                  d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="p-2">
            {/* {alert.success ? (
                <SuccessAlert alert={alert} setAlert={setAlert} />
              ) : null}
              {alert.error ? (
                <ErrorAlert alert={alert} setAlert={setAlert} />
              ) : null} */}
            <form onSubmit={newData.id ? handleOnUpdate : handleOnAdd}>
              <div className="w-full p-2 ">
                <label className="text-sm text-gray-700 p-2">Item</label>
                <input
                  className="w-full block focus:outline-none h-10 px-4 bg-gray-100 rounded-lg focus:shadow-inner focus:bg-white focus:border-blue-500 border border-gray-400"
                  type="text"
                  name="item"
                  //   required={true}
                  value={newData.item}
                  onChange={handleOnChange}
                  //   error={errors.current_password}
                />
              </div>
              <div className="w-full p-2">
                <label className="text-sm text-gray-700 p-2">Category</label>
                <input
                  className="w-full block focus:outline-none h-10 px-4 bg-gray-100 rounded-lg focus:shadow-inner focus:bg-white focus:border-blue-500 border border-gray-400"
                  type="text"
                  name="category"
                  //   required={true}
                  value={newData.category}
                  onChange={handleOnChange}
                  //   error={errors.new_password}
                />
              </div>
              <div className="w-full p-2 inline-flex items-center">
                <input
                  type="checkbox"
                  name="completed"
                  checked={newData.completed}
                  onChange={handleOnChange}
                />
                <label className="text-gray-800 text-sm ml-1">Completed</label>
              </div>

              <div className="flex justify-between p-2">
                <button
                  onClick={closeModel}
                  type="button"
                  className="w-auto px-4 py-2 leading-6 sm:leading-5 bg-white rounded-lg border border-gray-400 text-sm font-medium text-gray-700 shadow-sm hover:opacity-75 focus:outline-none"
                >
                  Cancel
                </button>
                <button
                  className="w-auto px-8 py-2 leading-6 sm:leading-5 bg-blue-600 rounded-lg border border-gray-400 text-sm font-medium text-white shadow-sm hover:opacity-75 focus:outline-none"
                  type="submit"
                >
                  {newData.id ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModel;
