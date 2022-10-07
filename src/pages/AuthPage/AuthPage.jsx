import Button from 'components/common/Button';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';
import authOperations from 'redux/auth/operations.auth';
import * as yup from 'yup';
// import PropTypes from 'prop-types';

// import s from './authPage.module.scss';

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

const AuthPage = props => {
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
            <form onSubmit={formik.handleSubmit} className={null}>
                <label>
                    E-Mail
                    <input
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </label>
                <label htmlFor="lastName">
                    Password
                    <input
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </label>
                <Button type="submit">Login</Button>
                <Button type="button" onClick={handleRegister}>
                    Rigister
                </Button>
            </form>
        </>
    );
};

// AuthPage.propTypes = {};

export default AuthPage;
