import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetInterviewQuestionsByTechnologyIdQuery ,  useChangePasswordMutation} from "../services/userApi";
import { setUsers } from "../features/userSlice";

function Users({ technologyId }) {
  const dispatch = useDispatch();

  const {
    data = [],
    isLoading,
    isError,
    isSuccess,
  } = useGetInterviewQuestionsByTechnologyIdQuery(technologyId, {
    skip: !technologyId,
  });

  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUsers(data));
    }
  }, [isSuccess, data, dispatch]);

  if (!technologyId) {
    return (
      <div className="text-center py-10 text-gray-500 text-lg">
        Please select a technology.
      </div>
    );
  }

  if (isLoading) {
    return (
      <h2 className="text-center text-xl mt-10">
        Loading...
      </h2>
    );
  }

  if (isError) {
    return (
      <h2 className="text-center text-red-500 text-xl mt-10">
        Something went wrong...
      </h2>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-4">

      {users?.length > 0 ? (
        <div className="space-y-5">

          {users.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-6"
            >
              {/* Question & Difficulty */}
              <div className="flex justify-between items-start mb-4">

                <h2 className="text-lg font-bold text-black pr-4">
                  Q. {item.question}
                </h2>

                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap
                    ${
                      item.difficulty === "Easy"
                        ? "bg-green-100 text-green-700"
                        : item.difficulty === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                >
                  {item.difficulty}
                </span>

              </div>

              

<p className="text-left text-gray-700 leading-7">
  {item.answer}
</p>
            </div>
          ))}

        </div>
      ) : (
        <div className="text-center py-10 text-gray-500 text-lg">
          No Questions Found
        </div>
      )}

    </div>
  );
}

export default Users;