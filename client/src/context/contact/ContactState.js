import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Ignacio Rodriguez",
        email: "nacho@gmail.com",
        phone: "111-1111",
        type: "personal",
      },
      {
        id: 2,
        name: "Susana Cravero",
        email: "susana@gmail.com",
        phone: "122-2211",
        type: "personal",
      },
      {
        id: 3,
        name: "Iona Arregui",
        email: "iona@gmail.com",
        phone: "11999909",
        type: "profesional",
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Agregar contacto
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Borra contacto
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //Setear un contacto actual
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  //Borrar contacto actual
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //Actualizar contacto
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  //Filtrar por contacto
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  //Borrar filtro
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
