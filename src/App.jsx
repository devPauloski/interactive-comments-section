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
    <section className="mx-auto grid grid-cols-[auto_auto] rounded-lg bg-white p-3 md:max-w-183 md:grid-cols-[auto_1fr_auto] md:grid-rows-[auto_auto]">
      <div className="col-span-2 col-start-1 mb-4 flex flex-wrap items-center gap-3 md:col-start-2 md:col-end-3 md:mb-0">
        <img
          className="w-8.5"
          src="/avatars/image-amyrobson.webp"
          alt="amyrobson"
        />
        <h2 className="font-bold text-grey-800">amyrobson</h2>
        <p>1 month ago</p>
      </div>
      <p className="col-span-2 col-start-1 mb-4 md:col-start-2 md:mb-0">
        Impressive! Though it seems the drag feature could be improved. But
        overall it looks incredible. You've nailed the design and the
        responsiveness at various breakpoints works really well.
      </p>
      <div className="md:row-start-1 md:row-end-3 md:h-fit">
        <div className="inline-flex items-center gap-2 rounded-xl bg-grey-50 md:flex-col">
          <button
            className="grid h-10 w-10 cursor-pointer place-items-center"
            aria-label="Upvote"
          >
            <img src="/src/assets/icons/icon-plus.svg" alt="" />
          </button>
          <p className="text-center font-medium text-purple-600">
            <span className="sr-only">Comment votes:</span> 12
          </p>
          <button
            className="grid h-10 w-10 cursor-pointer place-items-center"
            aria-label="Downvote"
          >
            <img src="/src/assets/icons/icon-minus.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-end md:col-start-3 md:row-start-1 md:h-8.5">
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
