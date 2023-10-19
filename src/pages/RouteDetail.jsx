// RouteDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RouteCard from './RouteCard'; 
import CommentSection from '../component/CommentSection';
import { db } from '../config/firebase-config';
import { collection, query, where, onSnapshot } from 'firebase/firestore';

function RouteDetail() {
  const { id } = useParams();
  const [route, setRoute] = useState(null);

  useEffect(() => {
    const routesCollectionRef = collection(db, 'initialRoutes');
    const routeQuery = query(routesCollectionRef, where('id', '==', id));

    const unsubscribe = onSnapshot(routeQuery, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setRoute({ id: doc.id, ...doc.data() });
      });
    });

    return () => {
      // Unsubscribe from the Firestore snapshot when the component unmounts
      unsubscribe();
    };
  }, [id]);

  return (
    <div>
      {route ? (
        <RouteCard route={route} />
      ) : (
        <p>Route not found</p>
      )}
      <CommentSection routeId={id} /> 
    </div>
  );
}

export default RouteDetail;

