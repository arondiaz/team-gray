import { useEffect, useState } from 'react';
import styles from './index.module.scss';

export const Categories = ({ register }: any) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <select
      className={styles.select}
      {...register('categories', { required: 'La categoría es obligatoria' })}>
      <option value="">Selecciona una opción</option>
      {categories.map((category: any) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};
