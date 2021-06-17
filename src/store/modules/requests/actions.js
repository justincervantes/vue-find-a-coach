export default {
  contactCoach(context, payload) {
    const request = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message
    };
    context.commit('addRequest', request);
  }
};
