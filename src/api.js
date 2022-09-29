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
