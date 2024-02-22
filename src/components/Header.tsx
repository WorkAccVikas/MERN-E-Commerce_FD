import React, { useState } from "react";
import {
  FaSearch,
  FaShoppingBag,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import useOutsideClick from "../hooks/useOutsideClick.hook";

const user = { _id: "1", role: "admin" };
// const user = { _id: "", role: "" };

function Header() {
  console.log("Header");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const logoutHandler = () => {
    setIsOpen(false);
  };

  const handleClickOutside = () => {
    // console.log("Outside click");
    if (isOpen) setIsOpen(false);
  };

  const ref = useOutsideClick(
    handleClickOutside
  ) as React.LegacyRef<HTMLButtonElement>;

  return (
    <nav className="header">
      <Link to={"/"} onClick={() => setIsOpen(false)}>
        HOME
      </Link>
      <Link to={"/search"} onClick={() => setIsOpen(false)}>
        <FaSearch />
      </Link>
      <Link to={"/cart"} onClick={() => setIsOpen(false)}>
        <FaShoppingBag />
      </Link>
      {user?._id ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)} ref={ref}>
            <FaUser />
          </button>
          <dialog open={isOpen}>
            <div>
              {user.role === "admin" && (
                <Link to={"/admin/dashboard"} onClick={() => setIsOpen(false)}>
                  Admin
                </Link>
              )}
              <Link to={"/orders"} onClick={() => setIsOpen(false)}>
                Orders
              </Link>
              <button onClick={logoutHandler}>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <FaSignInAlt />
        </Link>
      )}
    </nav>
  );
}

export default Header;
