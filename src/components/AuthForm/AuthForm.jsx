import Button from 'components/common/Button';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
import authOperations from 'redux/auth/operations.auth';
import * as yup from 'yup';
import s from '../AuthForm/AuthForm.module.scss';
import { ReactComponent as GoogleIcon } from '../../assets/svg/Google.svg';

const validationSchema = yup.object({
    email: yup
        .string('Enter email')
        .min(5, 'Too Short!')
        .email('Invalid email')
        .required('Email is required'),
    password: yup
        .string('Enter password')
        .min(8, 'Too Short!')
        .required('Number is required'),
});

const AuthForm = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            // onSubmit(values);
            console.log(values);
            dispatch(authOperations.login(values))
                .unwrap()
                .catch(error => console.log(error));
            // resetForm();
        },
    });

    const handleRegister = () => {
        dispatch(authOperations.register(formik.values))
            .unwrap()
            .catch(error => console.log(error));
    };

    return (
        <>
            <form onSubmit={formik.handleSubmit} className={s.auth_form}>
                <p className={s.auth_form_text}>
                    You can login with Google Account:
                </p>
                <a
                    href="https://kidslike-v1-backend.goit.global/auth/google"
                    className={s.auth_form_google_button}
                    aria-label="google button"
                >
                    <GoogleIcon className={s.auth_form_icon_google} />
                    Google
                </a>
                <p className={s.auth_form_text}>
                    Or log in with e-mail and password after registering:
                </p>

                <label className={s.auth_form_label}>
                    <span className={s.auth_form_span}>*</span>
                    E-Mail:
                    <input
                        className={s.auth_form_input}
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder="your@email.com"
                    />
                </label>
                <label className={s.auth_form_label}>
                    <span className={s.auth_form_span}>*</span>
                    Password:
                    <input
                        className={`${s.auth_form_input} ${s.auth_form_input__black}`}
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder="••••••••"
                    />
                </label>
                <div className={s.auth_form_inner_btn}>
                    <Button type="submit">Login</Button>
                    <Button type="button" onClick={handleRegister}>
                        Rigister
                    </Button>
                </div>
            </form>
        </>
    );
};

// AuthPage.propTypes = {};

export default AuthForm;
