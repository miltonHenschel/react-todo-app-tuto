import styles from '../styles/Header.module.css';

function Header() {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
  };

  return (
    <header style={headerStyle} className={styles.header}>
      <h1>todo list</h1>
    </header>
  );
}

export default Header;
