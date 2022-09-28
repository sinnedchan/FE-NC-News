import axios from "axios";

//GET
export const getArticles = ({ topic_name }) => {
  return axios
    .get("https://sinnedchan-nc-new-example-api.herokuapp.com/api/articles", {
      params: { topic: topic_name },
    })
    .then((res) => {
      return res.data.articles;
    });
};

export const getAllTopics = () => {
  return axios
    .get("https://sinnedchan-nc-new-example-api.herokuapp.com/api/topics")
    .then((res) => {
      return res.data;
    });
};

export const getArticleById = (article_id) => {
  return axios
    .get(
      `https://sinnedchan-nc-new-example-api.herokuapp.com/api/articles/${article_id}`
    )
    .then((res) => {
      return res.data.article;
    });
};

//PATCH
export const addVotes = (article_id) => {
  return axios.patch(
    `https://bc-news-example.herokuapp.com/api/articles/${article_id}`,
    { inc_votes: 1 }
  );
};

export const minusVotes = (article_id) => {
  return axios.patch(
    `https://bc-news-example.herokuapp.com/api/articles/${article_id}`,
    { inc_votes: -1 }
  );
};
