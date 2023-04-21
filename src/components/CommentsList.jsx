import { useState } from "react";
import CommentCard from "./CommentCard";
import InfoModal from "./InfoModal";

function CommentsList({ user, article_id, comments, setComments }) {
  const [modalOpen, setModalOpen] = useState(false);

  if (comments.length === 0) {
    return <div>No comments, be the first to action now!</div>;
  }

  return (
    <div className="comment-list">
      <InfoModal 
        title="❌ Error"
        message="Oops, can't delete your comment!" 
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
      />

      {
        comments.map((comment) => {
          return (
            <CommentCard 
              key={comment.comment_id} 
              user={user} 
              comment={comment} 
              setComments={setComments}
              setModalOpen={setModalOpen}
            />
          );
        })
      }
    </div>
    
  );
}

export default CommentsList;