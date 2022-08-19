import React from "react";
import {IoLogoGithub, IoLogoLinkedin, IoLogoTwitter} from "react-icons/io5";

import logo from "../assets/logo.png";
import logo2 from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="p-2 w-full flex flex-col md:flex-row justify-between items-center">
      <img alt="Softvision" className="my-3 md:my-0" src={logo} width={240} />
      <p className="text-indigo-500 text-center my-3 md:my-0">
        Este es un challenge ofrecido por Goncy, para verlo{" "}
        <a
          className="underline underline-offset-2 text-indigo-600 font-bold"
          href="https://github.com/goncy/cognizant-softvision-challenge"
          rel="noreferrer"
          target={"_blank"}
        >
          click aqui
        </a>
      </p>
      <div>
        <ul className="flex flex-row">
          <li>
            <a href="https://github.com/hctmanuelortiz" rel="noreferrer" target={"_blank"}>
              <IoLogoGithub className="mx-3 text-2xl text-indigo-600" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hctmanuelortiz/"
              rel="noreferrer"
              target={"_blank"}
            >
              <IoLogoLinkedin className="mx-3 text-2xl text-indigo-600" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/hctmanuelortiz" rel="noreferrer" target={"_blank"}>
              <IoLogoTwitter className="mx-3 text-2xl text-indigo-600" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
