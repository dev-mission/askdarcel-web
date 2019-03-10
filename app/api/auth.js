import config from '../config';

/* eslint-disable import/prefer-default-export */
export function adminLogin(email, password) {
  return fetch(config.API_URL + '/api/admin/auth/sign_in', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
}
