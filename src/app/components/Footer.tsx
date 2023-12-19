import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="navbar-bottom navbar-expand-lg">
          <div
            className="  p-7 text-white"
            style={{ backgroundColor: "#141e30 " }}
          >
            <p className="flex justify-center">
              Created by
              <Link
                href="https://www.linkedin.com/in/ayushkumargupta02/"
                className="ml-1 text-sky-600"
              >
                Ayush Kumar Gupta
              </Link>
              .
            </p>

            <p className="mt-2 flex justify-center text-sm">
              Copyright © 2023. All rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
