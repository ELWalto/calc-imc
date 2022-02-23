import { IconButton } from "@mui/material";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Modal() {
  const notify = () =>
    toast.success("Calculo efetuado!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      closeOnClick: false,
      theme: 'dark',
      draggableDirection:'y',
      hideProgressBar:true,
      

    });

  return (
    <div>
      <IconButton onClick={notify}> Calcular
      </IconButton>

      <ToastContainer />
    </div>
  );
}
