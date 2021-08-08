import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import Router from "../../router";

const Add = () => {
  const history = useHistory();

  const [users, setUsers] = useState([]);
  const [UserId, setUserId] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "UserId":
        setUserId(value);
        break;

      case "name":
        setName(value);
        break;

      case "category":
        setCategory(value);
        break;
    }
  };

  const handleSubmit = async () => {
    const body = { UserId, name, category };
    const data = await Router("POST", "items/add", body);

    if (data.status === 201) {
      swal("Success!", "New item was successfully added.", "success").then(
        (value) => {
          history.push("/");
        }
      );
    } else {
      if (data.err) {
        swal({
          title: "Failed!",
          text: "Please complete all fields",
          icon: "error",
          button: "Ok",
        });
      } else {
        swal({
          title: "Something went wrong!",
          icon: "error",
          button: "Ok",
        });
      }
    }
  };

  const getUsers = async () => {
    const data = await Router("GET", "users");
    setUsers(data.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container w-50 mt-3">
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Username</label>
        <div className="col-sm-10">
          <select
            className="form-control"
            name="UserId"
            onChange={(e) => handleChange(e)}
            defaultValue=""
          >
            <option value="" disabled>
              - Pilih User -
            </option>
            {users.map((user, index) => {
              return (
                <option key={index} value={user.id}>
                  {user.username}
                </option>
              );
            })}
          </select>
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
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
