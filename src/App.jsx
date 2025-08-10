import data from "./data.json";
import PlusIcon from "./assets/icons/icon-plus.svg?react";
import MinusIcon from "./assets/icons/icon-minus.svg?react";
import ReplyIcon from "./assets/icons/icon-reply.svg?react";

export default function App() {
  return (
    <main className="px-4 py-7">
      <h1 className="sr-only">Comments</h1>
      <CommentSection />
    </main>
  );
}

function CommentSection() {
  return (
    <ul className="mx-auto max-w-120 md:max-w-182">
      {data.comments.map((comment) => {
        return (
          <li key={comment.id}>
            <section
              aria-labelledby="title"
              className="grid grid-cols-[auto_auto] rounded-lg bg-white p-3 md:grid-cols-[auto_1fr_auto] md:grid-rows-[auto_auto] md:p-6"
            >
              <div className="col-span-2 col-start-1 mb-4 flex flex-wrap items-center gap-3 md:col-start-2 md:col-end-3">
                <img
                  className="size-8.5"
                  src={comment.user.image.webp}
                  alt={comment.user.username}
                />
                <h2 id="title" className="font-bold text-grey-800">
                  {comment.user.username}
                </h2>
                <p>{comment.createdAt}</p>
              </div>
              <p className="col-span-2 col-start-1 mb-4 md:col-start-2 md:mb-0 md:max-w-[60ch]">
                {comment.content}
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
                    {comment.score}
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
                <button className="flex items-center gap-2.5">
                  <ReplyIcon />
                  <span className="font-medium text-purple-600">Reply</span>
                </button>
              </div>
            </section>
            {comment.replies.length > 0 && (
              <ul className="md:ml-[5%]">
                {comment.replies.map((reply) => {
                  return (
                    <li key={reply.id}>
                      {
                        <section
                          aria-labelledby="title"
                          className="grid grid-cols-[auto_auto] rounded-lg bg-white p-3 md:grid-cols-[auto_1fr_auto] md:grid-rows-[auto_auto] md:p-6"
                        >
                          <div className="col-span-2 col-start-1 mb-4 flex flex-wrap items-center gap-3 md:col-start-2 md:col-end-3">
                            <img
                              className="size-8.5"
                              src={reply.user.image.webp}
                              alt={reply.user.username}
                            />
                            <h2
                              id="user-name"
                              className="font-bold text-grey-800"
                            >
                              {reply.user.username}
                            </h2>
                            <p>{reply.createdAt}</p>
                          </div>
                          <p className="col-span-2 col-start-1 mb-4 md:col-start-2 md:mb-0 md:max-w-[60ch]">
                            {reply.content}
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
                                <span className="sr-only">reply score:</span>
                                {reply.score}
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
                            <button className="flex items-center gap-2.5">
                              <ReplyIcon />
                              <span className="font-medium text-purple-600">
                                Reply
                              </span>
                            </button>
                          </div>
                        </section>
                      }
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
