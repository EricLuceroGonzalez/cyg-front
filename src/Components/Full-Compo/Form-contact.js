import { Fragment, React, useState } from "react";
import Input from "../UI/Input";

export default function FormContact(props) {
  const [invalidEmail, setInvalidEmail] = useState(false);
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

  const sendForm = async (e) => {
    e.preventDefault();
    console.log("thisForm");
    console.log(props.contactData);
    props.changeForm();
  };
  return (
    <Fragment>
      <div className="text-center">
        <h2 className="font-bold text-2xl text-indigo-500">
          Gracias por tu compra
        </h2>
        <h2 className="font-500">Participa en la encuesta,</h2>
        <h2 className="font-400">comenta y gana</h2>
      </div>
      <form className="w-full max-w-sm mr-auto ml-auto" onSubmit={sendForm}>
        <div className="flex flex-col items-center py-2">
          <Input
            wrapperClassName={"w-full mt-2"}
            error={false}
            required
            errorText={""}
            label={"Nombre"}
            name="formName"
            onChange={handleChange}
            placeholder={"Nombre"}
          ></Input>
          <Input
            wrapperClassName={"w-full mt-2"}
            error={false}
            required
            errorText={""}
            label={"Teléfono"}
            type="number"
            name="formNumber"
            onChange={handleChange}
            placeholder={"Numero de teléfono"}
          ></Input>
          <Input
            wrapperClassName={"w-full mt-2"}
            onChange={handleChange}
            error={invalidEmail}
            errorText={invalidEmail ? "Introduce un correo valido" : ""}
            id="email"
            required
            name="formEmail"
            label="Email"
            type="email"
            placeholder="tu@email.com"
          ></Input>
          <div className="mt-10">
            <p className="font-light text-gray-500">
              Completa el registro y haz click en seguir
            </p>
          </div>
          <button
            className={`mt-6 flex-shrink-0 text-sm border-4 text-white py-1 px-2 rounded font-bold ${
              invalidEmail
                ? " bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700"
                : " bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700"
            }`}
            disabled={invalidEmail ? true : false}
            type="submit"
          >
            Seguir
          </button>
        </div>
      </form>
    </Fragment>
  );
}
