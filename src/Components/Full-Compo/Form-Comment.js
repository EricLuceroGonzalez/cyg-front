import { Fragment, React, useState } from "react";
import Input from "../UI/Input";

export default function FormComment(props) {
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [comment, setComment] = useState("");
  const [satisfaction, setSatisfaction] = useState();
  const handleChange = (e) => {
    e.preventDefault();
    props.setContact({ ...props.contactData, [e.target.name]: e.target.value });

    // Validate email
    let emailValid = [];
    console.log("\n ---------");
    if (e.target.name == "formEmail") {
      emailValid = e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      setInvalidEmail(emailValid === null ? true : false);
      console.log(`invalidEmail: ${invalidEmail}`);
    }
    console.log(`emailValid: ${emailValid}`);
  };

  const sendComment = async (e) => {
    e.preventDefault();
    console.log("thisForm");
    console.log(comment);
  };
  const setCheckBox = (param) => {
    console.log(`Satisfied? ${param}`);
    setSatisfaction(param);
  };
  return (
    <Fragment>
      <div className="text-center">
        <h2 className="font-bold text-2xl text-indigo-500">{props.contact}</h2>
        <h2 className="font-500">Participa en la encuesta,</h2>
      </div>
      <form className="w-full max-w-sm mr-auto ml-auto" onSubmit={sendComment}>
        <div className="flex justify-center">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              onChange={() => setCheckBox(true)}
            ></input>
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="inlineRadio10"
            >
              Sí
            </label>
          </div>
          <div className="form-check form-check-inline ml-7">
            <input
              className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
              onChange={() => setCheckBox(false)}
            ></input>
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="inlineRadio20"
            >
              No
            </label>
          </div>
        </div>
        <div className="flex flex-col items-center py-2">
          <textarea
            className="border-gray-100 w-full px-4 py-2"
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comentario..."
            rows={4}
          ></textarea>
          {/* <div className="mt-10">
            <p className="font-light text-gray-500">
              Completa el registro y haz click en comentar
            </p>
          </div> */}
          <button
            className={`mt-6 flex-shrink-0 text-sm border-4 text-white py-1 px-2 rounded font-bold ${
              invalidEmail
                ? " bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700"
                : " bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700"
            }`}
            disabled={invalidEmail ? true : false}
            type="submit"
          >
            Comentar
          </button>
        </div>
      </form>
    </Fragment>
  );
}
