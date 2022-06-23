import { Fragment, React, useState } from "react";
import Input from "../UI/Input";

const Survey = () => {
  const [contactInfo, setContactInfo] = useState({
    formName: "",
    formEmail: "",
    formNumber: "",
  });
  const [emailIsValid, setEmailIsValid] = useState(true);

  const sendForm = async (e) => {
    e.preventDefault();
    console.log("thisForm");
  };
  const handleChange = (e) => {
    e.preventDefault();
    let emailValid = []
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });


    // Validate email
    if (e.target.name == 'formEmail') {
     
    emailValid = e.target.value.match(
        /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
      );
      setEmailIsValid(emailValid ? true: false)   
    }
  };
  return (
    <Fragment>
      <div className="px-6 py-10 w-4/5 md:w-2/4 lg:w-2/4 mt-16 bg-gray-100 drop-shadow-lg mr-auto ml-auto rounded-lg">
        <div className="text-center">
        <h2 className="font-bold text-2xl text-indigo-500">Gracias por tu compra</h2>
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
              error={!emailIsValid}
              errorText={!emailIsValid ? "Introduce un correo valido" : ""}
              id="email"
              required
              name="formEmail"
              label="Email"
              type="email"
              placeholder="tu@email.com"
            ></Input>
            <div className="mt-10">
              <p className="font-light text-gray-500">
                Completa el registro y haz click en comentar
              </p>
            </div>
            <button
              className="mt-6 flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded font-bold"
              type="submit"
            >
              Comentar
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Survey;
