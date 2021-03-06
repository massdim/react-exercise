import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Router from "../../router";

const Home = () => {
  const [items, setItems] = useState([]);

  const getData = async () => {
    const data = await Router("GET", "");
    setItems(data.items);
  };

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const data = await Router("DELETE", `items/${id}/delete`);

        if (data.status === 200) {
          getData();
        } else {
          console.log(data.message);
        }

        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mt-3">
      <Link to="/items/add">
        <button className="btn btn-primary mb-3">Add Item</button>
      </Link>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>
                  <Link to={`items/${item.id}/edit`}>
                    <button className="btn btn-warning">Edit</button>
                  </Link>
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: 10 }}
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
