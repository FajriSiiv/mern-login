import React, { useEffect } from "react";
import FormAddProduct from "../components/FormAddProduct";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
const AddProduct = () => {
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
      <FormAddProduct />
    </Layout>
  );
};

export default AddProduct;
