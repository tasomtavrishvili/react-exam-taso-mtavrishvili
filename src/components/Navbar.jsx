import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '15px', backgroundColor: '#e0e0e0', display: 'flex', gap: '20px' }}>
      <Link to="/">მთავარი</Link>
      <Link to="/products">პროდუქტები</Link>
      <Link to="/contact">კონტაქტი</Link>
    </nav>
  );
}

export default Navbar;
