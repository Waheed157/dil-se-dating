'use client';

import { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "your_collection"));
        setData(querySnapshot.docs.map(doc => doc.data()));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <h1>Dil Se Dating ❤️</h1>
      <p>Jahan Dil Milte Hain</p>
    </main>
  );
}
