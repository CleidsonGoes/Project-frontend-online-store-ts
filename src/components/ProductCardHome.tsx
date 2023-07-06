import { Link } from 'react-router-dom';

type ProductsCardHomeProps = {
  products: any[];
};

function ProductCardHome({ products }: ProductsCardHomeProps) {
  return (
    <div>
      {products.map((product) => (
        <Link
          key={ product.id }
          to={ `/product/${product.id}` }
          data-testid="product-detail-link"
        >
          <div data-testid="product">
            <h3>{product.title}</h3>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{`R$ ${product.price}`}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductCardHome;
