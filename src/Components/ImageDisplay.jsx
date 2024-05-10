import React, { useEffect, useState } from "react";
// "https://fakestoreapi.com/products"
function ImageDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div>
      <h2>Images Display from an API</h2>
      <table border={1}>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
        {data.map((item) => {
          return (
            <tr>
              <td>
                <img
                  src={item.image}
                  alt="Images"
                  style={{ height: "100px", width: "100px" }}
                />
              </td>
              <td>{item.title}</td>
              <td>{item.description}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default ImageDisplay;
