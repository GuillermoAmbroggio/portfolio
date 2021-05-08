import * as Yup from "yup";
import { IWriting } from "../../../copywriting/writing.type";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const validateInput = (texts: IWriting) => {
  return Yup.object().shape({
    user_name: Yup.string()
      .required(texts.contact.form.errorsInputs.required)
      .min(3, texts.contact.form.errorsInputs.minLong),
    user_email: Yup.string()
      .required(texts.contact.form.errorsInputs.required)
      .email(texts.contact.form.errorsInputs.email),
    user_subject: Yup.string()
      .required(texts.contact.form.errorsInputs.required)
      .min(3, texts.contact.form.errorsInputs.minLong),
    message: Yup.string()
      .required(texts.contact.form.errorsInputs.required)
      .min(5, texts.contact.form.errorsInputs.message),
  });
};

export default validateInput;
