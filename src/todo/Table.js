import React from "react";

const Table = ({
  showData,
  minRow,
  handleOnTableCheckboxChange,
  handleOnDelete,
  handleOnEdit,
}) => {
  const styles = {
    td: "w-auto table-cell p-4 border-b border-gray-200 text-xs ",
    th:
      "p-4 uppercase text-sm text-left leading-4 border-b border-gray-200 bg-blue-500 text-white",
    svg: "mx-1 cursor-pointer hover:opacity-75",
  };
  return (
    <table className="min-w-full rounded-lg overflow-hidden">
      <thead className="table-header-group">
        <tr>
          <th className={styles.th}></th>
          <th className={styles.th}>#</th>
          <th className={styles.th}>Item</th>
          <th className={styles.th}>Category</th>
          <th className={styles.th}></th>
        </tr>
      </thead>
      <tbody className="table-row-group bg-white">
        {showData.map((data, index) => (
          <tr
            key={data.id}
            className={`p-6 table-row border-b border-none ${
              data.completed ? "bg-gray-300 text-gray-500" : ""
            }`}
          >
            <td className={styles.td}>
              <input
                type="checkbox"
                checked={data.completed}
                onChange={() => handleOnTableCheckboxChange(data.id)}
              />
            </td>
            <td className={styles.td}>{minRow + index + 1}</td>
            <td className={styles.td}>{data.item}</td>
            <td className={styles.td}>{data.category}</td>
            <td className={styles.td}>
              <div className="flex items-center justify-end">
                {!data.completed && (
                  <div
                    onClick={() => handleOnEdit(data)}
                    className={styles.svg}
                    title="Edit"
                  >
                    <svg
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 text-blue-500"
                    >
                      <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                  </div>
                )}

                <div
                  className={styles.svg}
                  title="Delete"
                  onClick={() => handleOnDelete(data.id)}
                >
                  <svg
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-red-500"
                  >
                    <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
