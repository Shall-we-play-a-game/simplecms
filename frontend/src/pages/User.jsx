import React from "react";
import Table from "../components/Table";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className='h-screen px-10 pt-20 justify-center items-center bg-gray-800'>
      <Link
        to='/create'
        type='button'
        className='rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-black bg-green-500'
      >
        Add +
      </Link>
      <Table />
    </div>
  );
};

export default User;
