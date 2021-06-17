export default {
  requests(state, _, _2, rootGetters) {
    const coachId = rootGetters.userId;
    console.log(state.requests);
    console.log(
      'Filtered: ',
      state.requests.filter(req => {
        return req.coachId === coachId;
      })
    );

    return state.requests.filter(req => req.coachId === coachId);
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  }
};
