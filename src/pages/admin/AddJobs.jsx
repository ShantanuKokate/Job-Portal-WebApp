import React, { useState } from "react";
import axios from "axios";
export default function AddProduct() {
  const [name, setname] = useState();
  const [brand, setbrand] = useState();
  const [price, setprice] = useState();
  const [image, setimage] = useState();
  const [description, setdescription] = useState();
  const [stock, setstock] = useState();
  const [Exp, setExp] = useState();
  const [category, setcategory] = useState();
  const [internship, setInternship] = useState();
  const myStyle = {
    backgroundImage:
      "url('https://png.pngtree.com/background/20210709/original/pngtree-gradient-jobs-business-investment-picture-image_925027.jpg')",
    height: "89vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const [preview, setpreview] = useState();
  const [isDisable, setisDisable] = useState(true);
  const handleImageUpload = (e) => {
    // console.log(e.target.files[0]);
    setimage(e.target.files[0]);
    console.log(URL.createObjectURL(e.target.files[0]));
    setpreview(URL.createObjectURL(e.target.files[0]));
  };
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("name", name);
    fd.append("brand", brand);
    fd.append("price", price);
    fd.append("image", image);
    fd.append("description", description);
    fd.append("stock", stock);
    fd.append("Exp", Exp);
    fd.append("category", category);
    fd.append("internship", internship);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const { data } = await axios.post(
      `${process.env.REACT_APP_URL}/api/product/add-job`,
      fd,
      config
    );
    setpreview(null);
    e.target.reset();
  };
  return (
    <div style={myStyle}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6  mt-5 offset-sm-2">
            <div className="card">
              <div className="card-header ">Add POST</div>
              <div className="card-body">
                <form onSubmit={handleAddProduct}>
                  <input
                    onChange={(e) => setname(e.target.value)}
                    type="text"
                    placeholder="Technology"
                    className="form-control"
                  />
                  <br />
                  <input
                    onChange={(e) => setbrand(e.target.value)}
                    type="text"
                    placeholder="Company Name"
                    className="form-control"
                  />
                  <br />
                  <input
                    onChange={(e) => setprice(e.target.value)}
                    type="number"
                    placeholder="Salary"
                    className="form-control"
                  />
                  <input
                    onChange={(e) => setprice(e.target.value)}
                    type="number"
                    placeholder="Exp"
                    className="form-control"
                  />
                  <br />
                  <div className="d-flex">
                    <input
                      onChange={handleImageUpload}
                      type="file"
                      placeholder="image"
                      className="form-control"
                    />
                    <img src={preview} height="40" />
                  </div>
                  <br />
                  <input
                    onChange={(e) => setstock(e.target.value)}
                    type="number"
                    placeholder="Vacancy"
                    className="form-control"
                  />
                  <br />
                  <input
                    onChange={(e) => setExp(e.target.value)}
                    type="number"
                    placeholder="Experience"
                    className="form-control"
                  />
                  <br />
                  <input
                    onChange={(e) => setInternship(e.target.value)}
                    type="text"
                    placeholder="Job Role Internship or Full Time"
                    className="form-control"
                  />
                  <br />

                  <textarea
                    onChange={(e) => setdescription(e.target.value)}
                    type="text"
                    placeholder="description"
                    className="form-control"
                  ></textarea>
                  <br />

                  {/* <button className="btn btn-success w-100" disabled={isDisable ? true : false}>Add Product</button> */}
                  <button className="btn btn-warning w-100">Add Job</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
