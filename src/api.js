import axios from "axios";

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