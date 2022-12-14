import axios from "axios";
const newsApi = axios.create({
  baseURL: "https://sinnedchan-nc-new-example-api.herokuapp.com/api",
});
//GET
export const getArticles = ({ topic_name }) => {
  return newsApi
    .get("/articles", {
      params: { topic: topic_name },
    })
    .then((res) => {
      return res.data.articles;
    });
};

export const getAllTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data;
  });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

//PATCH
export const changeVotes = (article_id, votes) => {
  return newsApi
    .patch(`/articles/${article_id}`, {
      inc_votes: votes,
    })
    .then((res) => {
      return res.data;
    });
};

export const addComment = (article_id, author, body, comment) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, {
      username: author,
      body: body,
      comment: comment,
    })
    .then((res) => {
      return res.comment;
    });
};
