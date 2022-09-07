import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
    console.log(products);
  }, []);

  const getProduct = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:5000/products/${productId}`);

    getProduct();
  };

  return (
    <div>
      <h1 className="title">Produk</h1>
      <h2 className="subtitle">List Produk</h2>
      <Link className="button is-primary mb-2" to={"/products/add"}>
        Tambah Produk
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Produk Nama</th>
            <th>Harga</th>
            <th>Dibuat oleh</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.map((produk, i) => (
            <tr key={produk.uuid}>
              <td>{i + 1}</td>
              <td>{produk.name}</td>
              <td>Rp {produk.price.toFixed(2)}</td>
              <td>{produk.user.name} </td>
              <td>
                <Link
                  to={`/products/edit/${produk.uuid}`}
                  className="button is-info is-small"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(produk.uuid)}
                  className="button  is-small is-danger ml-2"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
