import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Home = () => {
  return (
    <div>
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <Link to="/about" style={styles.navLink}>About</Link>
        </div>
        <div style={styles.navRight}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>
              <Link to="/RaviPage" style={styles.navLink}>Ravi</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/VamshiPage" style={styles.navLink}>Vamshi</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/GirishPage" style={styles.navLink}>Girish</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div style={styles.content}>
        <h1>Welcome to Home Page</h1>
        <p>Select a page from the navbar to navigate.</p>
      </div>
    </div>
  );
};

// Simple styling for the navbar
const styles = {
    navbar: {
      backgroundColor: '#f8f9fa',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-between', // Align left and right
      marginBottom: '20px',
      alignItems: 'center',
    },
    navLeft: {
      flex: 1, // Push the content to the left
    },
    navRight: {
      flex: 1, // Push the content to the right
      display: 'flex',
      justifyContent: 'flex-end', // Align items to the right
    },
    navList: {
      listStyleType: 'none',
      padding: 0,
      display: 'flex',
      margin: 0,
    },
    navItem: {
      margin: '0 15px',
    },
    navLink: {
      textDecoration: 'none',
      color: '#007bff',
      fontSize: '18px',
    },
    content: {
      textAlign: 'center',
    },
  };
  
export default Home;
