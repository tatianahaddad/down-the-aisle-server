const xss = require("xss");

const articleService = {

  serializeArticle(newArticles) {
    (Object.assign({ ...newArticles}))
    /*const makeObjects = newArticles.url.reduce(function (obj, itm) {
      obj['url'] = itm;
      return obj;
    }, {});*/
    //return {url : newArticles.url.map(url => url)}
  },
  
  insertArticles(db, newArticles) {
    return db
      .insert(newArticles)
      .into("articles")
      .returning("*")
      .then(([article]) => article);
  }
};
module.exports = articleService;
