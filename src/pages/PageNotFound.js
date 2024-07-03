import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/Pagenotfound.png";
import { Button } from "../components/button";
import { useEffect } from "react";
export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found / Cinemate`;
  });

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404 Page Not Found
          </p>
          <div className="max-w-lg">
            <img
              className="rounded border-r-4"
              src={PageNotFoundImage}
              alt="X> NOT FOUND <X"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/">
            <Button>Back To Home</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};
