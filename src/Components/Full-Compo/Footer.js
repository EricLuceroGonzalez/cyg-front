import { Component, Fragment } from "react";

export default function Footer(params) {
  return (
    <Fragment>
    <div className="mt-4 p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
          <img
            src={`${process.env.REACT_APP_COMENTA_Y_GANA_WHITE_LOGO}`}
            className="mr-3 h-8"
            alt="Flowbite Logo"
          />
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-xs text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Proyecto
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Política de privacidad
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Planes
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a className="hover:underline">
          Comentaygana™
        </a>
        . All Rights Reserved.
      </span>
      </div>
    </Fragment>
  );
}
