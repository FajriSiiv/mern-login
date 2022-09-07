import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const FormAddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {}, [message]);

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", {
        name: name,
        price: price,
      });
      navigate("/products");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.msg);
      }
      toast.error("Nama dan Harga tidak boleh kosong", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };
  return (
    <div>
      <h1 className="title">Produk</h1>
      <h2 className="subtitle">Tambah Produk</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            {/* {toast.error(message, {
              position: "bottom-center",
              autoClose: 10000,
            })} */}
            <form onSubmit={saveProduct}>
              <div className="field">
                <label className="label">Nama</label>
                <div className="control">
                  <input
                    type="text"
                    placeholder="Nama Produk"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Harga</label>
                <div className="control">
                  <input
                    type="text"
                    placeholder="Harga"
                    className="input"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Simpan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default FormAddProduct;
