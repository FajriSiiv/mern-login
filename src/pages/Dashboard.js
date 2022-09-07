import Welcome from "../components/Welcome";
import Layout from "./Layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch, isError]);

  useEffect(() => {
    if (isError) {
      navigation("/");
    }
  }, [navigation, isError]);

  return (
    <Layout>
      <Welcome />
    </Layout>
  );
};

export default Dashboard;
