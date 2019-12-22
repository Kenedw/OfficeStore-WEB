import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const response = yield call(api.post, 'auth/sign_in', payload);

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Baerer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/myCatalog');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seu email/senha');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    yield call(api.post, 'user', payload);
    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro verifique seus dados!');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Baerer ${token}`;
  }
}

export function signOut() {
  history.push('/');
  api.defaults.headers.Authorization = '';
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
