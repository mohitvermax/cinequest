import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="flex flex-wrap justify-center gap-12">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="mt-7 flex justify-center gap-10">
        <a href="https://twitter.com/mohitvermaxx" >
          <FaTwitter />
        </a>
        <a href="https://instagram.com/mohitvermaxx" >
            <FaInstagram />
        </a>
        <a href="https://youtube.com/@emveemusic" >
            <FaYoutube />
        </a>
      </div>
      <div className="mt-7">
        <p>Made with ❤️ by Mohit Verma</p>
      </div>
    </footer>
  );
};

export default Footer;