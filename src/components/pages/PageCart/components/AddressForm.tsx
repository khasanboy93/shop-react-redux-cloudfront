import React from "react";
import { ProductSchema } from "models/Product";
import { Field, Formik, FormikProps, FormikValues } from "formik";
import * as Yup from "yup";
import { Grid, Typography, TextField, FormControlLabel, Checkbox, Button } from "@mui/material";

// type AddressFormProps = {
//   initialValues: object,
//   onChange: any
// };
//
// export default function AddressForm({initialValues, onChange}:AddressFormProps) {
//   return (
//     <React.Fragment>
//
//       <Formik
//         initialValues={initialValues}
//         validationSchema={ProductSchema}
//         onSubmit={() => undefined}
//       >
//         {(props: FormikProps<FormikValues>) => <Form {...props} onChange={onChange} />}
//       </Formik>
//     </React.Fragment>
//   );
// }
