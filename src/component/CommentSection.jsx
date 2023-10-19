import React, { useState, useEffect } from 'react';
import { db } from '../config/firebase-config';
import { collection, query, where, onSnapshot ,addDoc} from 'firebase/firestore';

function CommentSection({ routeId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch comments for the specific route based on the routeId
    const commentsCollectionRef = collection(db, 'comments');
    const commentsQuery = query(commentsCollectionRef, where('routeId', '==', routeId));

    const unsubscribe = onSnapshot(commentsQuery, (querySnapshot) => {
      const commentsData = [];
      querySnapshot.forEach((doc) => {
        commentsData.push({ id: doc.id, ...doc.data() });
      });
      setComments(commentsData);
    console.log(commentsCollectionRef)
    });

    return () => {
      // Unsubscribe from the Firestore snapshot when the component unmounts
      unsubscribe();
    };
  }, [routeId]);

  const handleAddComment = async () => {
    if (newComment.trim() !== '') {
      const commentsCollectionRef = collection(db, 'comments');
      await addDoc(commentsCollectionRef, { routeId, text: newComment });
      setNewComment('');
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      <textarea
        placeholder="Add a comment"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
}

export default CommentSection;
