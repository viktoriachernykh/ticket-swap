import request from "superagent";

const baseUrl = "http://localhost:4000";

export const fetchComments = currentTicketId => dispatch => {
  request(`${baseUrl}/comment`)
    .then(response => {
      const allComments = response.body;
      const currentTicketComments = allComments.filter(
        comment => comment.ticketId === currentTicketId
      );
      dispatch(commentsFetched(currentTicketComments));
    })
    .catch(console.error);
};
function commentsFetched(comments) {
  return {
    type: "ALL_COMMENTS",
    comments
  };
}

export const addComment = (newComment, token) => dispatch => {
  request
    .post(`${baseUrl}/comment`)
    .set("Authorization", `Bearer ${token}`)
    .send(newComment)
    .then(res => {
      dispatch(commentAdded(res.body));
    })
    .catch(console.error);
};
function commentAdded(newComment) {
  return {
    type: "ADD_COMMENT",
    newComment
  };
}
