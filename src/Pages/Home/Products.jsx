import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [datas, setData] = useState([]);
  console.log(datas);
  useEffect(() => {
    fetch("/public/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="max-w-7xl  mx-auto my-24 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {datas.map((data) => (
        <div key={data.id}>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={data.image} alt="image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.title}</h2>
              <p>{data.description.slice(0, 50)}</p>
              <div className="card-actions justify-end">
                <Link to={`/detailsPage/${data.id}`}>
                  <button className="btn btn-primary">Read More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
