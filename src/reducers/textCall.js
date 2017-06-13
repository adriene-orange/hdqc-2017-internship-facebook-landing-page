export default (state = { data: {}, error: '' }, payload) => {
  switch (payload.type) {
    case 'REQUEST_ACCEPTED':
      return { ...state, data: payload.data, error: '' };
    case 'REQUEST_REJECTED':
      return { ...state, data: {}, error: '' };
    default:
      return { ...state, data: {}, error: '' };
  }
};
