import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={Yup.object({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          // İstifadəçi məlumatlarını yoxlamaq üçün backend API çağırışı
          const response = await axios.post('http://localhost:5000/login', values);
          const { username, role } = response.data;

          // Redux-a istifadəçi məlumatlarını əlavə edirik
          dispatch(login({ username, role }));

          // Toast bildirişi
          toast.success('Successfully logged in!');

          // Adminsə admin panelinə, əks halda ana səhifəyə yönləndirilir
          navigate(role === 'admin' ? '/admin' : '/home');
        } catch (error) {
          toast.error('Invalid username or password');
        }
        setSubmitting(false);
      }}
    >
      <Form>
        <div>
          <label htmlFor="username">Username</label>
          <Field name="username" type="text" />
          <ErrorMessage name="username" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" className="error" />
        </div>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default Login;
