import { apiConnector } from '../apiconnector';
import { endpoints } from '../api';

export const signUp = async (email, password) => {
  console.log("signup api run successfully  "  ,endpoints.SIGNUP_API);
    return apiConnector('POST', endpoints.SIGNUP_API, {email, password });
};
export const signIn = async (email, password) => {
  console.log("Login api run successfully  "  , endpoints.LOGIN_API);
    return apiConnector('POST', endpoints.SIGNIN_API, { email ,password });
};

  