import React, { useEffect } from "react";
import FormEditUser from "../components/FormEditUser";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const EditUser = () => {
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
      <FormEditUser />
    </Layout>
  );
};

export default EditUser;
