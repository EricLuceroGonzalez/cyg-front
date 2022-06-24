import { Fragment, React, useState } from "react";
import Input from "../UI/Input";
import FormComment from "./Form-Comment";
import FormContact from "./Form-contact";

const Survey = () => {
  const [formView, setFormView] = useState("contact");
  const [contactInfo, setContactInfo] = useState({
    formName: "",
    formEmail: "",
    formNumber: "",
  });

  return (
    <Fragment>
      <div className="px-6 py-10 w-4/5 md:w-2/4 lg:w-2/4 mt-16 bg-gray-100 drop-shadow-lg mr-auto ml-auto rounded-lg">
        <img
        className="w-1/6 mr-auto ml-auto"
        src={`${process.env.REACT_APP_COMENTA_Y_GANA_WHITE_ISO}`}></img>
        {formView === "contact" ? (
          <FormContact
            changeForm={() => setFormView("comment")}
            contactData={contactInfo}
            setContact={setContactInfo}
          />
        ) : (
          <FormComment contact={contactInfo.formName} />
        )}
      </div>
    </Fragment>
  );
};

export default Survey;
