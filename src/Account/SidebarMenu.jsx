import { Link, useLocation } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const SidebarMenu = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/Dashboard', img: "https://cdn-icons-png.flaticon.com/128/3405/3405258.png" },
    { name: 'New Ticket', path: '/New', img: 'https://cdn-icons-png.flaticon.com/128/5505/5505549.png' },
    { name: 'Ticket Approval', path: '/approval', img:'https://cdn-icons-png.flaticon.com/128/25/25219.png' },
    { name: 'My Ticket', path: '/My', img: 'https://cdn-icons-png.flaticon.com/128/9221/9221356.png' },
    { name: 'Performance', path: '/Performance', img: 'https://cdn-icons-png.flaticon.com/128/9321/9321497.png' },
  ];

  return (
    <div className="menu-div" style={{ color: "black" }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {menuItems.map(item => (
          <li key={item.path} className={location.pathname === item.path ? 'active' : ''}>
            <Link
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: 'black',
                textDecoration: 'none',
                padding: '8px 12px'
              }}
            >
              {location.pathname === item.path && (
                <FaArrowRight style={{ color: "black" }} />
              )}
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: '24px',
                  height: '24px',
                  objectFit: 'contain'
                }}
              />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
