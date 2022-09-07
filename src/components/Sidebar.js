import React from "react";
import { NavLink } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout, reset } from "../features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(Logout());
    dispatch(reset());
    navigation("/");
  };

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>
              {" "}
              <IoPricetag /> Produk
            </NavLink>
          </li>
        </ul>
        {user && user.role === "disable" && (
          <>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> User
                </NavLink>
              </li>
            </ul>
          </>
        )}
        <p className="menu-label">Setting</p>
        <ul className="menu-list">
          <li>
            <button className="button is-white" onClick={logout}>
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
