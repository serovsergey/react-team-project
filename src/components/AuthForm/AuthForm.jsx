import Button from 'components/common/Button';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/operations.auth';
import * as yup from 'yup';
import s from '../AuthForm/AuthForm.module.scss';
import { ReactComponent as GoogleIcon } from '../../assets/svg/Google.svg';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

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
        onSubmit: values => {
            dispatch(authOperations.login(values))
                .unwrap()
                .catch(error =>
                    toast.error(`Login is failed with message${error.message}`)
                );
        },
    });

    const handleRegister = () => {
        dispatch(authOperations.register(formik.values))
            .unwrap()
            .catch(error =>
                toast.error(
                    `Register is failed with message: ${error.message}.`
                )
            );
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
                    <span className={s.auth_form_validation}>
                        {formik.errors.email}
                    </span>
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
                    <span className={s.auth_form_validation}>
                        {formik.errors.password}
                    </span>
                </label>
                <ul className={s.auth_form_inner_btn}>
                    <li className={s.item}>
                        <Button type="submit">Login</Button>
                    </li>
                    <li className={s.item}>
                        <Button type="button" onClick={handleRegister}>
                            Rigister
                        </Button>
                    </li>
                </ul>
                {/* <div className={s.auth_form_inner_btn}>
                    <Button type="submit">Login</Button>
                    <Button type="button" onClick={handleRegister}>
                        Rigister
                    </Button>
                </div> */}
            </form>
        </>
    );
};
AuthForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default AuthForm;
