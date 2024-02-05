import React from "react"
import { Button, StyleSheet, TextInput, View } from "react-native"
import StyledText from "../components/StyledText";
import { Formik, useField } from "formik";
import StyledTextInput from "../components/StyledTextInput";
import { loginValidationSchema } from "../validationSchemas/login";


//Componente Input de FORMIK - para estandarizar input (por name) y validacion y errores
const FormikInputValue = ({ name, ...props }) => {
    //field: campo email contiene prop value - meta data tiene prop error - helpers como cambiar el campo email, contiene prop setValue
    const [field, meta, helpers] = useField(name)
    return (
        <>
            <StyledTextInput
                placeholder="E-mail"
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                error={meta.error}
                {...props}
            />
            {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
        </>

    )
}

//VALIDACION SIMPLE SIN YUP
// const validate = values => {
//     const errors = {}
//     if (!values.email) {
//         errors.email = "Email is required"
//     } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
//         errors.email = "Invalid email address"
//     }
//     return errors
// }



//VALIDACION YUP LIBRERIA -> npm install yup ver archivo
//en componente formik usar prop validacionSchema y la funcion de validacion que quiera de yup


//FORMIK - > npm install formik y tiene como hijos una callback
const initialValues = {
    email: "",
    password: "",
}
function Signin() {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => console.log(values)}
            //VALIDACION SIMPLE -> validate={validate}
            validationSchema={loginValidationSchema}
        >

            {({ handleChange, handleSubmit, values }) => {
                return (
                    <View style={styles.form}>
                        <FormikInputValue
                            name="email"
                            placeholder="E-mail"
                        />
                        <FormikInputValue
                            name="password"
                            placeholder="Password"
                            secureTextEntry
                        />
                        { // Mejor componetizar y standarizar funciones

                        /* <StyledTextInput
                            placeholder="E-mail"
                            value={values.email}
                            onChangeText={handleChange("email")}
                        />
                        <StyledTextInput
                            placeholder="Password"
                            value={values.password}
                            onChangeText={handleChange("password")}
                        /> */}
                        <Button onPress={handleSubmit} title="Log In"></Button>
                    </View>
                )
            }}
        </Formik>
    )
}

const styles = StyleSheet.create({
    form: {
        margin: 12,
    },
    error: {
        color: "red",
        fontSize: 12,
        marginBottom: 10
    }
})

export default Signin;