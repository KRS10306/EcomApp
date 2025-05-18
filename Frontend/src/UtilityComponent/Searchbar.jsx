import React, { useState } from 'react'

const Searchbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <form className="max-w-lg mx-auto">
  <div className="flex">
    <label
      htmlFor="search-dropdown"
      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
    >
      Your Email
    </label>
    <div className="relative">
      <button
        id="dropdownDefaultButton"
        onClick={() => setIsOpen(!isOpen)}
        className="shrink-0 z-10 inline-flex items-center bg-blue-700 py-2.5 px-4 text-sm font-medium text-center text-grey-900 rounded-s-lg  focus:outline-none focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        type="button"
      >
        All categories{" "}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="absolute z-10 divide-y divide-gray-100 rounded-lg shadow-sm w-44 bg-white dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 dark:hover:text-white"
              >
                Mockups
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 dark:hover:text-white"
              >
                Templates
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 dark:hover:text-white"
              >
                Design
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 dark:hover:text-white"
              >
                Logos
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>

    <div className="relative w-full">
      <input
        type="search"
        id="search-dropdown"
        className="block w-full z-20 text-sm text-gray-900 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-blue-500"
        placeholder="Search Mockups, Logos, Design Templates..."
        required=""
        style={{padding: 'calc(var(--spacing) * 4.7)'}}
      />
      <button
        type="submit"
        className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white rounded-e-lg border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          className="w-10 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </div>
  </div>
</form>
  )
}

export default Searchbar