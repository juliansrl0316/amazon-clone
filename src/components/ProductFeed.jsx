import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, description, category, image, price, rating }) => (
          <Product
            key={id}
            title={title}
            description={description}
            category={category}
            image={image}
            price={price}
            rating={rating}
          />
        ))}
      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />

      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, description, category, image, price, rating }) => (
            <Product
              key={id}
              title={title}
              description={description}
              category={category}
              image={image}
              price={price}
              rating={rating}
            />
          ))}
      </div>

      {products
        .slice(5, products.length)
        .map(({ id, title, description, category, image, price, rating }) => (
          <Product
            key={id}
            title={title}
            description={description}
            category={category}
            image={image}
            price={price}
            rating={rating}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
