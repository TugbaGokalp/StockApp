import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import Grid from "@mui/material/Grid";
import { object, string } from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Box, TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { Form, Formik } from "formik";
import LoadingButton from "@mui/lab/LoadingButton";
import useAuthCall from "../hooks/useAuthCall";

const Register = () => {
  const navigate = useNavigate();
  const { currentUser, error, loading } = useSelector((state) => state?.auth);

  const {register} = useAuthCall();

  let registerScheme = object({
    firstname: string()
      .required("ad zorunludur")
      .max(20, "ad en fazla 20 karakter olmalıdır"),
    lastname: string()
      .required("soyad zorunludur")
      .max(20, "soyad en fazla 20 karakter olmalıdır"),
    username: string()
      .required("kullanıcı adı zorunludur")
      .max(20, "kullanıcı adı en fazla 20 karakter olmalıdır"),
    email: string()
      .email("Lutfen geçerli bir email giriniz")
      .required("Email zorunludur"),
    password: string()
      .required("password zorunludur")
      .min(8, "password en az 8 karakter olmalıdır")
      .max(20, "password en fazla 20 karakter olmalıdır")
      .matches(/\d+/, "Password bir sayı içermelidir")
      .matches(/[a-z]/, "Password bir küçük harf içermelidir")
      .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
      .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
  });

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              email: "",
              password: "",
              firstname: "",
              lastname: "",
              username: "",
            }}
            validationSchema={registerScheme}
            onSubmit={(values, actions) => {
              register({...values, password2: values.password});
              actions.resetForm();
              actions.setSubmitting(false); // otomatik true'ya kurulu state'i falselar.
            }}
          >
            {({ values, handleChange, handleBlur, errors, touched }) => (
              <Form>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <TextField
                    label="Username"
                    name="username"
                    id="username"
                    type="text"
                    value={values?.username || ""}
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                  />
                  <TextField
                    label="Firstname"
                    name="firstname"
                    id="firstname"
                    type="text"
                    value={values?.firstname || ""}
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.firstname && Boolean(errors.firstname)}
                    helperText={touched.firstname && errors.firstname}
                  />

                  <TextField
                    label="Lastname"
                    name="lastname"
                    id="lastname"
                    type="lastname"
                    value={values?.lastname || ""}
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.lastname && Boolean(errors.lastname)}
                    helperText={touched.lastname && errors.lastname}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    id="email"
                    type="email"
                    value={values?.email || ""}
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    label="Password"
                    name="password"
                    id="password"
                    type="password"
                    // value={values.password}
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />
                  

                  <LoadingButton
                    variant="contained"
                    type="submit"
                    loading={loading}
                  >
                    Submit
                  </LoadingButton>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src={image} alt="" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
