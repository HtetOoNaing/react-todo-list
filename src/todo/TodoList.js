import React, { useState } from "react";
import Table from "./Table";
import Filter from "./Filter";
import Pagination from "./Pagination";
import AddModel from "./AddModel";
const lists = [
  {
    id: 1,
    item: "db migrate",
    category: "Backend API",
    completed: false,
  },
  {
    id: 2,
    item: "user api",
    category: "Backend API",
    completed: true,
  },
  {
    id: 3,
    item: "patient api",
    category: "Backend API",
    completed: false,
  },
  {
    id: 4,
    item: "visit api",
    category: "Backend API",
    completed: true,
  },
  {
    id: 5,
    item: "UMR route control",
    category: "Fontend App",
    completed: false,
  },
  {
    id: 6,
    item: "Patient route control",
    category: "Fontend App",
    completed: false,
  },
  {
    id: 7,
    item: "Profile page",
    category: "Fontend App",
    completed: true,
  },
  {
    id: 8,
    item: "Authentication",
    category: "Fontend App",
    completed: true,
  },
  {
    id: 9,
    item: "Authorization",
    category: "Fontend App",
    completed: false,
  },
];
const rowLimit = 6;
const TodoList = () => {
  const [showData, setShowData] = useState(lists);
  const [row, setRow] = useState({
    min: 0,
    max: rowLimit,
  });
  const [newData, setNewData] = useState({
    id: "",
    item: "",
    category: "",
    completed: false,
  });
  const [filter, setFilter] = useState({
    category: "All",
    search: "",
    done: "",
    undone: "",
  });
  const [isModelOpen, setIsModelOpen] = useState(false);
  const handleOnTableCheckboxChange = (id) => {
    let changeData = showData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setShowData(changeData);
  };
  const handleOnFilterData = () => {
    
  }
  const handleOnDelete = (id) => {
    let filteredData = showData.filter((data) => data.id !== parseInt(id));
    setShowData(filteredData);
  };
  const handleOnEdit = (data) => {
    setNewData(data);
    setIsModelOpen(true);
  };
  const closeModel = () => {
    setIsModelOpen(false);
    setNewData({
      id: "",
      item: "",
      category: "",
      completed: false,
    });
  };
  const handleOnAdd = (e) => {
    e.preventDefault();
    const { item, category, completed } = newData;
    let id = showData[showData.length - 1].id + 1;
    setShowData([...showData, { id, item, category, completed }]);
    closeModel();
  };
  const handleOnUpdate = (e) => {
    e.preventDefault();
    console.log(newData);
    let newShowData = showData.map((data) => {
      if (data.id === newData.id) {
        data = newData;
      }
      return data;
    });
    setShowData(newShowData);
    closeModel();
  };
  const loadNextData = () => {
    if (row.max < showData.length) {
      setRow({ min: row.max, max: row.max + rowLimit });
    }
  };
  const loadPrevData = () => {
    if (row.min > 0) {
      setRow({ max: row.min, min: row.min - rowLimit });
    }
  };
  const loadFistData = () => {
    if (row.min > 0) {
      setRow({ min: 0, max: rowLimit });
    }
  };
  const loadLastData = () => {
    if (row.max < showData.length) {
      setRow({
        min: showData.length - (showData.length % rowLimit),
        max: showData.length,
      });
    }
  };
  return (
    <div className="font-sans antialiased leading-tight text-gray-900 min-h-screen bg-gray-200">
      {isModelOpen && (
        <AddModel
          closeModel={closeModel}
          newData={newData}
          setNewData={setNewData}
          handleOnAdd={handleOnAdd}
          handleOnUpdate={handleOnUpdate}
        />
      )}
      <div className="max-w-screen-md mx-auto p-4 md:p-6 lg:p-10">
        <div className="text-center font-bold text-3xl text-black mb-6">
          Todo List
        </div>
        <div className="w-auto p-1 mt-4">
          <button
            onClick={() => setIsModelOpen(true)}
            className="w-auto px-4 py-2 leading-5 bg-blue-500 text-white rounded-lg shadow-sm text-sm font-medium border border-transparent hover:opacity-75 focus:outline-none"
          >
            Add New
          </button>
        </div>
        <Filter showData={showData} filter={filter} setFilter={setFilter} />
        <div className="bg-white rounded-lg shadow">
          <Table
            showData={showData.slice(row.min, row.max)}
            minRow={row.min}
            handleOnTableCheckboxChange={handleOnTableCheckboxChange}
            handleOnDelete={handleOnDelete}
            handleOnEdit={handleOnEdit}
          />
          <Pagination
            loadNextData={loadNextData}
            loadPrevData={loadPrevData}
            loadFistData={loadFistData}
            loadLastData={loadLastData}
            rowCount={showData.length}
            minRow={row.min}
            maxRow={row.max}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoList;