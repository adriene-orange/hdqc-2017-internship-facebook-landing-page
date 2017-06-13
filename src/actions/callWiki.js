import { apiCall } from '../services/apiCall';
// types
export const DATA_REQUESTED = 'DATA_REQUESTED';
export const DATA_ACCEPTED = 'DATA_ACCEPTED';
export const DATA_REJECTED = 'DATA_REJECTED';

// actions
export const initiateWikiCall = () => ({ type: DATA_REQUESTED, loading: true });
export const wikiAccepted = result => ({ type: DATA_ACCEPTED, result, loading: false });
export const wikiRejected = error => ({ type: DATA_REJECTED, error, loading: false });

// thunk
export const getWikiData = title => (dispatch) => {
  dispatch(initiateWikiCall());
  return apiCall(title)
  .then(
    (result) => {
      dispatch(wikiAccepted(result));
    },
    (error) => {
      dispatch(wikiRejected(error));
    },
  );
};
