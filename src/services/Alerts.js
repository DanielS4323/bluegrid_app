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

export const promptMessage = (articles, SetArticles,SetEdit) => {
    Swal.fire({
              title: 'Are you sure?',
              text: 'You won`t be able to revert this!',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes!'
    }).then((result) => {
      
    if (result.isConfirmed) {

      SetEdit(false)
      handleDelete(articles,SetArticles)
      
    Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
      )
    }
  })
}