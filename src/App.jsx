import { useState } from "react";
import data from "./data.json";
import PlusIcon from "./assets/icons/icon-plus.svg?react";
import MinusIcon from "./assets/icons/icon-minus.svg?react";
import ReplyIcon from "./assets/icons/icon-reply.svg?react";

export default function App() {
  const [comments, setComments] = useState(data.comments);

  return (
    <main className="px-4 py-7 md:px-0 md:py-16">
      <div className="mx-auto max-w-120 md:max-w-182">
        <h1 className="sr-only">Comments</h1>
        <CommentSection comments={comments} />
      </div>
    </main>
  );
}

function CommentSection({ comments }) {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Comment commentData={comment} />
          {comment.replies.length > 0 && (
            <ul className="ml-4 md:ml-[10%]">
              {comment.replies.map((reply) => {
                return (
                  <li key={reply.id}>
                    <Comment commentData={reply} />
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

function Comment({ commentData }) {
  const { user, createdAt, content, score } = commentData;

  const [isReply, setIsReply] = useState(false);

  return (
    <section aria-labelledby="user-name">
      <div className="mb-4.5 grid grid-cols-[auto_auto] rounded-lg bg-white p-3 shadow md:grid-cols-[auto_1fr_auto] md:grid-rows-[auto_auto] md:p-6">
        <div className="col-span-2 col-start-1 mb-4 flex flex-wrap items-center gap-3 md:col-start-2 md:col-end-3">
          <img className="size-8.5" src={user.image.webp} alt={user.username} />
          <p id="user-name" className="font-bold text-grey-800">
            {user.username}
          </p>
          <p>{createdAt}</p>
        </div>

        <p className="col-span-2 col-start-1 mb-4 md:col-start-2 md:mb-0 md:max-w-[60ch]">
          {content}
        </p>

        <div className="md:row-start-1 md:row-end-3 md:mr-5.5 md:h-fit">
          <div className="inline-flex items-center gap-2 rounded-xl bg-grey-50 md:flex-col">
            <button
              className="grid h-10 w-10 cursor-pointer place-items-center md:h-8"
              aria-label="Upvote"
            >
              <PlusIcon />
            </button>
            <p className="text-center font-medium text-purple-600">
              <span className="sr-only">Comment score:</span>
              {score}
            </p>
            <button
              className="grid h-10 w-10 cursor-pointer place-items-center md:h-8"
              aria-label="Downvote"
            >
              <MinusIcon />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-end md:col-start-3 md:row-start-1 md:h-8.5">
          <button
            onClick={() => setIsReply(!isReply)}
            className="flex cursor-pointer items-center gap-2.5"
          >
            <ReplyIcon />
            <span className="font-medium text-purple-600">Reply</span>
          </button>
        </div>
      </div>
      {isReply && <ReplyComment />}
    </section>
  );
}

function ReplyComment() {
  return (
    <form className="mb-5 rounded-lg bg-white p-4 md:px-5.5 md:py-5.5">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-[auto_1fr_auto]">
        <div className="col-start-1 col-end-3 border-1 md:col-start-2 md:col-end-3">
          <label htmlFor="reply-text" className="sr-only">
            Enter reply text
          </label>
          <textarea
            className="h-24 w-full resize-none"
            name="replyText"
            id="reply-text"
          ></textarea>
        </div>
        <img
          className="h-10.5 w-10.5 md:row-start-1"
          src="../images/avatars/image-juliusomo.webp"
          alt=""
        />
        <div>
          <button className="bg-purple-600 text-white">REPLY</button>
        </div>
      </div>
    </form>
  );
}
