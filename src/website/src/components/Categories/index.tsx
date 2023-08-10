import { useEffect, useState } from 'react';
import styles from './index.module.scss';

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <select className={styles.select}>
      {categories.map((category: any) => (
        <option
          className={styles.options}
          key={category.id}
          value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};
