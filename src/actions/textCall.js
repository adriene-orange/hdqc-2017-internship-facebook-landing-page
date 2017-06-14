import { textApicall } from '../services/apiCall';
// types
export const REQUEST_ACCEPTED = 'REQUEST_ACCEPTED';
export const REQUEST_REJECTED = 'REQUEST_REJECTED';

// actions
export const textRequestAccepted = data => ({ type: REQUEST_ACCEPTED, data });
export const textRequestRejected = error => ({ type: REQUEST_REJECTED, error });

// thunk
export const getWikiText = pageId => (dispatch) => {
  console.log('getwikiText called');
  textApicall(pageId)
  .then(
    (data) => {
      dispatch(textRequestAccepted(data));
    },
    (error) => {
      dispatch(textRequestRejected(error));
    },
  );
};
