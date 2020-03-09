import { ACTION_SET_EMAIL, ACTION_SET_PASSWORD } from '../../screens/SignIn'

export const setEmail = (newEmail) => {
    return {
        type: ACTION_SET_EMAIL,
        payload: newEmail
    };
};

export const setPassword = (newPassword) => {
    return {
        type: ACTION_SET_PASSWORD,
        payload: newPassword
    };
};