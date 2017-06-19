import { apiCall, textApicall } from '../services/apiCall';
// types
export const DATA_REQUESTED = 'DATA_REQUESTED';
export const DATA_ACCEPTED = 'DATA_ACCEPTED';
export const DATA_REJECTED = 'DATA_REJECTED';

export const REQUEST_ACCEPTED = 'REQUEST_ACCEPTED';
export const REQUEST_REJECTED = 'REQUEST_REJECTED';

// actions
export const initiateWikiCall = () => ({ type: DATA_REQUESTED, loading: true });
export const wikiAccepted = result => ({ type: DATA_ACCEPTED, result, loading: true });
export const wikiRejected = error => ({ type: DATA_REJECTED, error, loading: false });

export const initiateTextCall = () => ({ type: DATA_REQUESTED, loading: true });
export const textRequestAccepted = (result, data) =>
({ type: REQUEST_ACCEPTED, data, result, loading: false });
export const textRequestRejected = error => ({ type: REQUEST_REJECTED, error, loading: false });

// thunk
export const getWikiText = (result, pageId) => (dispatch) => {
  dispatch(initiateTextCall());
  return textApicall(pageId)
  .then(
    (data) => {
      dispatch(textRequestAccepted(result, data));
    },
    (error) => {
      dispatch(textRequestRejected(error));
    },
  );
};

// thunk
export const getWikiData = title => (dispatch) => {
  dispatch(initiateWikiCall());
  console.log('.............title.....', title);
  return apiCall(title)
  .then(
    (result) => {
      console.log('........................', result);
      const pageID = result.pages[Object.keys(result.pages)[0]].pageid;
      dispatch(getWikiText(result, pageID));
      dispatch(wikiAccepted(result));
      return result;
    },
    (error) => {
      dispatch(wikiRejected(error));
      return error;
    },
  );
};
