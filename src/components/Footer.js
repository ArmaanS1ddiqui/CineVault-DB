import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © V2.2{" "}
        <Link to="/" className="hover:underline">
          CineVault DB | By Armaan Aijaz Siddiqui
        </Link>
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://www.instagram.com/armaan.04__/?next=%2F"
            target="_blank"
            rel="noreferrer"
            className="mr-4 hover:underline md:mr-6 "
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/armaan-aijaz-siddiqui-0b11751b9/"
            target="_blank"
            rel="noreferrer"
            className="mr-4 hover:underline md:mr-6"
          >
            LinkedIn
          </a>
        </li>

        <li>
          <a
            href="https://github.com/ArmaanS1ddiqui"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};
