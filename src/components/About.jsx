import React from 'react';
import { FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl p-8 bg-slate-950 rounded shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
        <p className="text-gray-100 mb-6">
          Hi there! I'm Mohit Verma, a passionate individual with a love for technology and creativity.
          I thrive on turning ideas into reality through coding and design. Here's a little more about me:
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-200">Background</h3>
        <p className="text-gray-100 mb-6">
          I have a background in HTML ,CSS ,JS ,ReactJS , TailwindCSS. My journey into the world of Web Development began
          when i started coding in my 9th class .
        </p>


        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-200">Interests</h3>
        <p className="text-gray-100 mb-6">
          Outside of coding, I have a keen interest in Music Production , Video Editing. You can often find me in the Audio Section IITR and CineSec IITR.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-2 text-gray-200">Connect with Me</h3>
        <p className="text-gray-100 mb-6">
          I'm always open to connecting with like-minded individuals. If you share similar interests or have a
          project idea you'd like to discuss, feel free to reach out! You can connect with me on:<br /> Instagram <a className='hover:text-fuchsia-700'href="https://instagram.com/mohitvermaxx">{<FaInstagram />}</a>
        </p>
      </div>
    </div>
  );
};

export default About;
