import React from "react";

function InterviewQuestionsTable({ data }) {
  return (
    <div className="w-full p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            Interview Questions & Answers
          </h2>
          
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Technology
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Difficulty
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Question
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Answer
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                  Follow-up
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {data?.questions?.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 align-top">
                  <td className="px-4 py-4">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                      {item.technology}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                        item.difficulty === "Beginner"
                          ? "bg-green-100 text-green-700"
                          : item.difficulty === "Intermediate"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.difficulty}
                    </span>
                  </td>

                  <td className="px-4 py-4 text-sm font-semibold text-gray-800 min-w-[260px]">
                    {item.question}
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-600 min-w-[420px]">
                    {item.detailedAnswer}
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-500 italic min-w-[260px]">
                    {item.followUpQuestion}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default InterviewQuestionsTable;

