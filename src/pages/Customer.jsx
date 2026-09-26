import { Link } from "react-router-dom";

 

function Customer() {
  return (
<div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
<h1 className="text-4xl font-bold text-blue-600">
        Customer Dashboard
</h1>

 

      <p className="mt-4 text-gray-600">
        Welcome to Customer Page
</p>

 

      <Link
        to="/"
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded"
>
        Logout
</Link>
</div>
  );
}

 

export default Customer;