export default function HomeFeatures() {
  return (
    <>
      <div
        className=" grid grid-cols-1 flex-wrap items-stretch justify-center pb-28 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3"
        style={{ backgroundImage: "linear-gradient(#243b55, #4682B4)" }}
      >
        <div className="col-span-1 p-20 pb-2 text-center sm:col-span-1 md:col-span-1 lg:col-span-1">
          <h3 className="mb-3 text-xl font-bold underline">
            Code with your teammates
          </h3>
          <p>
            Open a Codeshare editor, write or copy code, then share it with
            friends and colleagues. Pair program and troubleshoot together.
          </p>
        </div>
        <div className="col-span-1 p-20 pb-2 text-center sm:col-span-1 md:col-span-1 lg:col-span-1">
          <h3 className="mb-3 text-xl font-bold underline">
            Interview Developers
          </h3>
          <p>
            Set coding tasks and observe in real-time when interviewing remotely
            or in person. Nobody likes writing code on a whiteboard.
          </p>
        </div>
        <div className="col-span-1 p-20 pb-2 text-center sm:col-span-1 md:col-span-1 lg:col-span-1">
          <h3 className="mb-3 text-xl font-bold underline">
            Teach people to Code
          </h3>
          <p>
            Share your code with students and peers then educate them.
            Universities and colleges around the world use Codeshare every day.
          </p>
        </div>
      </div>
    </>
  );
}
