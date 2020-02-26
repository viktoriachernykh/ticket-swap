import request from "superagent";

const baseUrl = "http://localhost:4000";

export const fetchUsers = () => dispatch => {
  request(`${baseUrl}/user`)
    .then(response => {
      dispatch(usersFetched(response.body));
    })
    .catch(console.error);
};
function usersFetched(users) {
  return {
    type: "ALL_USERS",
    users
  };
}
