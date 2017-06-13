import { apiCall, textApicall } from '../services/apiCall';
// types
export const DATA_REQUESTED = 'DATA_REQUESTED';
export const DATA_ACCEPTED = 'DATA_ACCEPTED';
export const DATA_REJECTED = 'DATA_REJECTED';
export const REQUEST_ACCEPTED = 'REQUEST_ACCEPTED';
export const REQUEST_REJECTED = 'REQUEST_REJECTED';

// actions
export const initiateWikiCall = () => ({ type: DATA_REQUESTED, loading: true });
export const wikiAccepted = result => ({ type: DATA_ACCEPTED, result, loading: false });
export const wikiRejected = error => ({ type: DATA_REJECTED, error, loading: false });

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

// thunk
export const getWikiData = title => (dispatch) => {
  dispatch(initiateWikiCall());
  return apiCall(title)
  .then(
    (result) => {
      // const pageID = result.pages[Object.keys(result.pages)[0]].pageid;
      // dispatch(getWikiText(pageID));
      dispatch(wikiAccepted(result));
    },
    (error) => {
      dispatch(wikiRejected(error));
    },
  );
};
