export default (state = { data: {}, error: '' }, payload) => {
  console.log('payload from reducer', payload);
  switch (payload.type) {
    case 'REQUEST_ACCEPTED':
      console.log({ ...state, data: payload.data, error: '' });
      return { ...state, data: payload.data, error: '' };
    case 'REQUEST_REJECTED':
      return { ...state, data: {}, error: '' };
    default:
      return { ...state, data: {}, error: '' };
  }
};
