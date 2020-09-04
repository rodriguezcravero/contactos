import React, { useContext, useEffect } from "react";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";
import ContactFilter from "./ContactFilter";
import AuthContext from "../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
      <div className="">
        <ContactForm />
      </div>
      <div className="">
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
