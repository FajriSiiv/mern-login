import React, { useEffect } from "react";
import Userlist from "../components/Userlist";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const Users = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch, isError]);

  useEffect(() => {
    if (isError) {
      navigation("/");
    }
    if (user && user.role !== "disable") {
      navigation("/dashboard");
    }
  }, [navigation, isError, user]);
  return (
    <Layout>
      <Userlist />
    </Layout>
  );
};

export default Users;
