import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Table = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/user/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='min-w-full text-left text-sm font-light text-surface dark:text-white'>
                <thead className='border-b border-neutral-200 font-medium dark:border-white/10'>
                  <tr>
                    <th scope='col' className='px-6 py-4'>
                      Name
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Email
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Date of Birth
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Phone Number
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((data, i) => (
                    <tr
                      className='border-b border-neutral-200 dark:border-white/10'
                      key={i}
                    >
                      <td className='whitespace-nowrap px-6 py-4'>
                        {data.Name}
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>
                        {data.Email}
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>
                        {data.DateOfBirth}
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>
                        {data.phoneno}
                      </td>
                      <td className='flex space-x-2'>
                        <Link
                          to={`/update/${data.ID}`}
                          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                        >
                          Update
                        </Link>
                        <button
                          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                          onClick={(e) => handleDelete(data.ID)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </table>
    </div>
  );
};

export default Table;
