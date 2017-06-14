export default (state = { data: {}, result: {}, error: '', loading: false }, payload) => {
  switch (payload.type) {
    case 'DATA_REQUESTED':
      return { ...state, loading: true, result: {}, error: '' };
    case 'DATA_ACCEPTED':
      return { ...state };
    case 'DATA_REJECTED':
      return { ...state, loading: false, error: '' };
    case 'REQUEST_ACCEPTED':
      return { ...state, data: payload.data, result: payload.result, error: '', loading: false };
    case 'REQUEST_REJECTED':
      return { ...state, data: {}, error: '', loading: false };
    default:
      return { ...state, data: {}, error: '' };
  }
};
