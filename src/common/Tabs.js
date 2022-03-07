import React from "react";

const Tabs = ({ ItemsClassName, ItemClassName, children }) => {
  return (
    <>
      <ul className={ItemsClassName}>
        <li className={ItemClassName}>
        {children}
        </li>
      </ul>
    </>
  );
};

export default Tabs;
