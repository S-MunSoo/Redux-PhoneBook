let initialState = {
  contactList: [],
};

// dispath을 통해서 던져진 액션은 자동으로 reducer이 받는다 받기 위해서는 행동지침이 있어야 한다.
function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
    default:
      return { ...state };
  }
}

export default reducer;
