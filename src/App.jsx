export default function App() {
  return (
    <main className="px-4 py-7">
      <h1 className="sr-only">Comments</h1>
      <Comment />
    </main>
  );
}

function Comment() {
  return (
    <section className="grid grid-cols-[auto_auto] rounded-lg bg-white p-3">
      <div className="col-span-2 col-start-1 mb-4 flex flex-wrap items-center gap-3">
        <img
          className="w-8.5"
          src="/public/avatars/image-amyrobson.webp"
          alt="amyrobson"
        />
        <h2 className="font-bold text-grey-800">amyrobson</h2>
        <p>1 month ago</p>
      </div>
      <p className="col-span-2 col-start-1 mb-4">
        Impressive! Though it seems the drag feature could be improved. But
        overall it looks incredible. You've nailed the design and the
        responsiveness at various breakpoints works really well.
      </p>
      <div>
        <div className="inline-flex items-center gap-2 rounded-xl bg-grey-50">
          <button
            className="grid h-10 w-10 cursor-pointer place-items-center"
            aria-label="Upvote"
          >
            <img src="/src/assets/icons/icon-plus.svg" alt="" />
          </button>
          <span className="font-medium text-purple-600">12</span>
          <button
            className="grid h-10 w-10 cursor-pointer place-items-center"
            aria-label="Downvote"
          >
            <img src="/src/assets/icons/icon-minus.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <button>
          <img
            className="mr-3 inline-block w-4"
            src="/src/assets/icons/icon-reply.svg"
            alt=""
          />
          <span className="font-medium text-purple-600">Reply</span>
        </button>
      </div>
    </section>
  );
}
