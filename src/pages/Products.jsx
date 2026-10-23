import { Link } from 'react-router-dom';

function Products() {
  const productsList = [
    { id: 1, name: 'ლეპტოპი' },
    { id: 2, name: 'სმარტფონი' },
    { id: 3, name: 'ყურსასმენი' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>🛍️ პროდუქტები</h1>
      <ul>
        {productsList.map((product) => (
          <li key={product.id} style={{ margin: '10px 0' }}>
            {product.name} — {' '}
            <Link to={`/products/${product.id}`}>დეტალების ნახვა</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;