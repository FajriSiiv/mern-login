import React, { useEffect } from "react";
import FormEditProduct from "../components/FormEditProduct";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const EditProduct = () => {
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
      <FormEditProduct />
    </Layout>
  );
};

export default EditProduct;
