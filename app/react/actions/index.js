import axios from 'axios';

export const FETCH_SETS = 'FETCH_SETS';
export const FETCH_SET = 'FETCH_SET';
export const CREATE_SET = 'FETCH_SET';
export const DELETE_SET = 'DELETE_SET';
export const CREATE_TERM = 'CREATE_TERM';

const ROOT_URL = 'http://localhost:3000/api';

export function fetchSets() {
  const request = axios.get(`${ROOT_URL}/vocabulary_sets`);

  return {
    type: FETCH_SETS,
    payload: request
  };
}

export function createSet(props) {
  const request = axios.post(`${ROOT_URL}/vocabulary_sets`, props);

  return {
    type: CREATE_SET,
    payload: request
  };
}

export function fetchSet(id) {
  const request = axios.get(`${ROOT_URL}/vocabulary_sets/${id}`);

  return {
    type: FETCH_SET,
    payload: request
  };
}

export function deleteSet(id) {
  const request = axios.delete(`${ROOT_URL}/vocabulary_sets/${id}`);

  return {
    type: DELETE_SET,
    payload: request
  };
}

export function createTerm(id, props) {
  const request = axios.post(`${ROOT_URL}/vocabulary_sets/${id}/add_term`, props);

  return {
    type: CREATE_TERM,
    payload: request
  };
}

export function deleteTerm(id, term_id) {
  const request = axios.delete(`${ROOT_URL}/vocabulary_sets/${id}/delete_term?term_id=${term_id}`);

  return {
    type: DELETE_SET,
    payload: request
  };
}
