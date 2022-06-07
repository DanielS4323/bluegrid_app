import { notEmpty } from "./notEmpty";
import { validateEmail } from "./validateEmail";
import { showMessage } from "./showMessage";

export const saveContactForm = (
  name,
  txtArea,
  email,
  SetContact,
  SetIsSuccess
) => {
  if (!notEmpty(name) && !notEmpty(txtArea)) {
    if (!notEmpty(email) && validateEmail(email)) {
      let newMessage = {
        name: name,
        email: email,
        question: txtArea,
      };
      SetContact(newMessage);

      showMessage("Form successfully sent.", "success", "center", 2000);

      SetIsSuccess(true);
    } else {
      showMessage("Email not valid.", "error", "center", 2000);
    }
  } else {
    showMessage("Name or question area is empty.", "error", "center", 2000);
  }
};
