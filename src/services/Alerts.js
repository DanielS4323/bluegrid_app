import Swal from "sweetalert2";
import { handleDelete } from "./HandleFunctions";

export const showMessage = (message, icon, position, timer) => {
    Swal.fire({
        position: position,
        icon: icon,
        title: message,
        showConfirmButton: false,
        timer: timer
      })
}

export const promptMessage = (title, text, icon, par1, par2,SetEdit, titleConfirm, textConfirm, iconConfirm) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes!'
  }).then((result) => {
    if (result.isConfirmed) {
      SetEdit(false)
     handleDelete(par1,par2)
      
      Swal.fire(
        titleConfirm,
        textConfirm,
        iconConfirm
      )
    }
  })
}