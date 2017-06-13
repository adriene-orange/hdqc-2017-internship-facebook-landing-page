export default (state = { loading: false, result: {}, error: '' }, payload) => {
  switch (payload.type) {
    case 'DATA_REQUESTED':
      return { ...state, loading: true, result: {}, error: '' };
    case 'DATA_ACCEPTED':
      return { ...state, loading: false, result: payload.result, error: '' };
    case 'DATA_REJECTED':
      return { ...state, loading: false, result: {}, error: '' };
    default:
      return { ...state, loading: false, result: {}, error: '' };
  }
};
