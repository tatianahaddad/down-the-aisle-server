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
/*
  console.log("testing");
  // get latest news
  //cron.schedule("* * * * *", () => {
    fetch(`${config.NEWS_ENDPOINT}`, {
      headers: {
        "x-api-key": `${config.API_KEY}`
      }
    }).then(
      res =>
        !res.ok
          ? res.json().then(e => Promise.reject(e))
          : res.json().then(JSON => Promise.resolve(JSON), console.log(JSON))
    )
    console.log('fetched')
    //.catch(next)
  });*/

module.exports = newsRouter;
