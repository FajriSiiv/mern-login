import React, { useEffect } from "react";
import FormAddUser from "../components/FormAddUser";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const AddUser = () => {
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
    if (user && user.role !== "admin") {
      navigation("/dashboard");
    }
  }, [navigation, isError, user]);
  return (
    <Layout>
      <FormAddUser />
    </Layout>
  );
};

export default AddUser;
