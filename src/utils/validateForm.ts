import * as yup from "yup";

export const LoginValidate = yup.object().shape({
    username: yup.string().trim().required("Se necesita el nombre de usuario"),
    password: yup.string().trim().required("Se necesita la contraseña"),
})