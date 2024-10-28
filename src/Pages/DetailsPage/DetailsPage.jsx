import { Link, useLoaderData, useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const makeNum = parseInt(id);
  const allProducts = useLoaderData();

  const currentProduct = allProducts.find((product) => product.id === makeNum);
  const { title, image, description, category } = currentProduct;

  if (!currentProduct) {
    return <div>Product not found</div>;
  }
  console.log(currentProduct);
  return (
    <div>
      <img src={image} alt="" />
      <h1>{title}</h1>

      <h1>{description}</h1>
      <h1>{category}</h1>
      <Link to={"/"}>
        <button className="btn">back</button>
      </Link>
    </div>
  );
};

export default DetailsPage;
