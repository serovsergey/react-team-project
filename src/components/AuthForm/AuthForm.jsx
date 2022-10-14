import Button from 'components/common/Button';
import { useFormik } from 'formik';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/operations.auth';
import * as yup from 'yup';
import s from '../AuthForm/AuthForm.module.scss';
import { ReactComponent as GoogleIcon } from '../../assets/svg/Google.svg';
import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';
import authSelectors from '../../redux/auth/selector.auth';
import { useTranslation } from 'react-i18next';

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
    const buttonRef = useRef();
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const isLoading = useSelector(authSelectors.getIsLoading);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: values => {
            buttonRef.current = 'login';
            dispatch(authOperations.login(values))
                .unwrap()
                .catch(error =>
                    toast.error(`Login is failed with message${error.message}`)
                );
        },
    });

    const handleRegister = () => {
        buttonRef.current = 'register';
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
                    {t(`You can login with Google Account:`)}
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
                    {t(
                        ` Or log in with e-mail and password after registering:`
                    )}
                </p>

                <label className={s.auth_form_label}>
                    <span className={s.auth_form_span}>*</span>
                    {t(`  E-Mail:`)}
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
                    {t(` Password:`)}
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
                        <Button
                            isLoading={
                                isLoading && buttonRef.current === 'login'
                            }
                            type="submit"
                        >
                            {t(` Login`)}
                        </Button>
                    </li>
                    <li className={s.item}>
                        <Button
                            isLoading={
                                isLoading && buttonRef.current === 'register'
                            }
                            type="button"
                            onClick={handleRegister}
                        >
                            {t(` Rigister`)}
                        </Button>
                    </li>
                </ul>
            </form>
        </>
    );
};
// AuthForm.propTypes = {
//
// };

export default AuthForm;
