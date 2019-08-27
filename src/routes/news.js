const express = require("express");
const fetch = require("node-fetch");
const cron = require("node-cron");
const config = require("../config");

const newsRouter = express.Router();

newsRouter.get("/news", (req, res, next) => {
  const url = `${config.NEWS_ENDPOINT}`;
  const settings = {
    method: "GET",
    headers: {
      "x-api-key": `${config.API_KEY}`
    }
  };

const get_data = async url => {
    try {
      const response = await fetch(url, settings);
      const json = await response.json();
      if (response.ok) {
        return res.send(json.articles)
      }
    } catch (error) {
      console.log(error);
    }
  }

  return get_data(url, settings);
});

module.exports = newsRouter;
