import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import Router from "../../router";

const Edit = () => {
  const params = useParams();
  const history = useHistory();

  const [id, setId] = useState(0);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const getData = async () => {
    const id = params.id;
    const data = await Router("PUT", `items/${id}/edit`);
    if (data.status === 200) {
      setId(data.item.id);
      setUsername(data.item.User.username);
      setName(data.item.name);
      setCategory(data.item.category);
    } else {
      alert("Wrong item id!");
      history.push("/");
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "category":
        setCategory(value);
        break;
    }
  };

  const handleSubmit = async () => {
    const body = { name, category };
    const data = await Router("PATCH", `items/${id}/update`, body);

    if (data.status === 200) {
      history.push("/");
    } else {
      if (data.err) {
        data.err.errors.forEach((error) => {
          console.log(error.message);
        });
      } else {
        console.log(data.message);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container w-50 mt-3">
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Username</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            value={username}
            readOnly
          />
        </div>
      </div>
      <div className="form-group row mt-3">
        <label className="col-sm-2 col-form-label">Name</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="form-group row mt-3">
        <label className="col-sm-2 col-form-label">Category</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="form-group row mt-3">
        <div className="col-sm-2">
          <Link to="/">
            <button className="form-control btn btn-primary">Back</button>
          </Link>
        </div>
        <div className="col-sm-10">
          <button
            className="form-control btn btn-success"
            onClick={() => handleSubmit()}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
