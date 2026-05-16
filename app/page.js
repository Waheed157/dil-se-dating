<<<<<<< HEAD
export default function Home() {
  return (
    <main>
      <h1>Dil Se Dating ❤️</h1>
      <p>Jahan Dil Milte Hain</p>
=======
'use client';

import { useEffect, useState } from 'react';
import { db } from './firebase.js';
import { collection, getDocs } from 'firebase/firestore';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <main style={{ padding: '20px' }}>
      <h1>Dil Se Dating</h1>
      <p>App is working!</p>
      
      {data.length > 0 ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
>>>>>>> 5a30f812f95cd19a006ccd842cff1ecb5cea1bdc
    </main>
  );
}
