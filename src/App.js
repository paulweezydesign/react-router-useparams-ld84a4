import React from 'react';
import { NavLink, Routes, Route, useParams } from 'react-router-dom';
import styles from './App.module.css';

export default function App() {
  // const history = useHistory();
  const params = useParams();

  return (
    <div className={styles.wrapper}>
      <nav className={styles.navWrapper}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/portfolio/1">portfolio/1</NavLink>
        <NavLink to="/portfolio/2/John">portfolio/2/john</NavLink>
        <NavLink to="/portfolio/3">portfolio 3</NavLink>
        <NavLink to="/portfolio/6/Filaberta">Filaberta</NavLink>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:id" element={<Portfolio />} />
        <Route path="/portfolio/:id/:name" element={<Portfolio />} />
        <Route path="/portfolio/:id/:name" element={<Portfolio />} />
      </Routes>
      <hr />
    </div>
  );
}

const Home = () => {
  const params = useParams();

  return (
    <div className={styles.page}>
      Home Page
      <div>
        <pre>params: {JSON.stringify(params)}</pre>
      </div>
    </div>
  );
};
const Portfolio = () => {
  const params = useParams();
  return (
    <div className={styles.page}>
      Portfolio Page
      <div>
        <pre>params: {JSON.stringify(params)}</pre>
      </div>
    </div>
  );
};
