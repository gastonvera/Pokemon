import React from 'react';
import { Outlet } from 'react-router-dom';
import FormularioContextProvider from '../context/ContextoFormulario';

const ContextFormLayout = () => {


  return (
    <FormularioContextProvider>
      <Outlet />
    </FormularioContextProvider>
  );
};

export default ContextFormLayout;