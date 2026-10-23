import React from 'react'
import { useParams, Link } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: '20px', border: '1px solid #4CAF50', margin: '20px 0' }}>
      <h2>📦 პროდუქტის დეტალური გვერდი</h2>
      <p>არჩეული პროდუქტის ID არის: <strong>{id}</strong></p>
      
      <Link to="/products">⬅ უკან პროდუქტების სიაში</Link>
    </div>
  );
}

export default ProductDetails;