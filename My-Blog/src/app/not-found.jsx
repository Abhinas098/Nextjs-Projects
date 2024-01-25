import Link from "next/link";
import React from "react";

const Notfound = () => {
  return (
    <>
      <h1>Not found</h1>
      <p>Page not found back to <Link href='/'>Home</Link></p>
    </>
  );
};

export default Notfound;
