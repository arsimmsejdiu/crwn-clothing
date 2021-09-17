import React from "react";

export const Subscribe = (sections) => {
  return (
    <section className="text-gray-700 max-w-7xl py-20 px-10 ml-60 body-font flex md:flex-row flex-col items-center bg-white">
      <div className="lg:flex-grow w-lg md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center max-w-7xl text-center">
        <h1 className="title-font sm:text-4xl text-6xl mb-4 font-bold text-gray-900">
          Express yourself
        </h1>
        <p className="mb-8 leading-relaxed text-2xl border-gray-400 font-semibold">
          Join the newsletter for new arrivals and more ... 
        </p>
        <div className="flex flex-row justify-start w-full max-w-md shadow-xl hover:shadow-2xl border-t border-b border-gray-200">
          <input
            className="border-l-4 border-red-700 bg-white focus:border-gray-300 font-semibold focus:outline-none px-4 w-full m-0"
            placeholder="Email"
            type="text"
          />
          <button className="inline-flex text-black py-2 font-semibold hover:bg-gray-400 transition transform px-6 focus:outline-none text-lg m-0 h-12 bg-gray-100">
            Subscribe
          </button>
        </div>
        <p className="text-sm mt-2 text-gray-700 font-semibold mb-8 w-full">
          Keep in tough with us.
        </p>
        <div className="flex lg:flex-row md:flex-col">
          <a href="/" className="mx-2 text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-md hover:shadow-xl hover:bg-gray-100 rounded-full bg-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="/" className="mx-2 text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-md hover:shadow-xl hover:bg-gray-100 rounded-full bg-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="/" className="mx-2 text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-md hover:shadow-xl hover:bg-gray-100 rounded-full bg-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" className="mx-2 text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-md hover:shadow-xl hover:bg-gray-100 rounded-full bg-white">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="md:w-1/2 w-5/6">
        <img
          className="object-cover object-center"
          alt="hero"
          src="https://images.unsplash.com/photo-1518272417499-b6ebd5fab96a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        />
      </div>
    </section>
  );
};
