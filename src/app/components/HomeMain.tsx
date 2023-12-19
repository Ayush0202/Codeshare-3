"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomeMain() {
  const router = useRouter();

  const handleGitHubClick = () => {
    router.push("https://github.com/Ayush0202/Codeshare-3.0");
  };

  const handleShareClick = () => {
    router.push("/codes");
  };

  return (
    <>
      <div
        className="flex flex-wrap content-around items-center justify-evenly p-2"
        style={{ backgroundImage: "linear-gradient(#141e30, #243b55)" }}
      >
        <div className="m-2 p-1 text-center">
          <h1 className="mb-8 text-3xl font-bold text-gray-400">
            Share Code with <br />
            Developers
          </h1>
          <h5 className="mb-2 text-red-600">
            An online code sharing platform <br /> for interviews,
            troubleshooting, teaching & more...
          </h5>
          <h6 className="mb-2 text-red-500">Share Code for free!</h6>

          <div>
            <button
              onClick={handleGitHubClick}
              className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800"
            >
              <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                GitHub
              </span>
            </button>

            <button
              onClick={handleShareClick}
              type="button"
              className="mb-2 me-2 rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-red-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-red-300 dark:shadow-lg dark:shadow-red-800/80 dark:focus:ring-red-800"
            >
              Share
            </button>
          </div>
        </div>

        <div>
          <Image src="/demo.gif" width={675} height={675} alt="Homepage GIF" />
        </div>
      </div>
    </>
  );
}
