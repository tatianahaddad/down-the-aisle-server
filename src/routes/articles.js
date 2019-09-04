const express = require('express')
const path = require('path')

const ArticlesService = require('../services/article-service')
const articlesRouter = express.Router()
const jsonBodyParser = express.json()

articlesRouter
  .route('/')
  .post(jsonBodyParser, (req, res, next) => {
    const { url } = req.body
    const newArticles = { url }

    for (const [key, value] of Object.entries(newArticles))
      if (value == null)
        return res.status(400).json({
          error: `Missing '${key}' in request body`
        })

        const newObjectArticles = Object.assign({ ...newArticles.url})
        console.log(newObjectArticles)
        /*const urlArticle = newArticles.url.map(url => url)
        console.log(urlArticle)*/
        ArticlesService.insertArticles(
          req.app.get('db'),
          newObjectArticles
        )
        res.send('working')
        .catch(next)
      
    //newComment.user_id = req.user.id
    /*CommentsService.insertComment(
      req.app.get('db'),
      newComment
    )*/
      /*.then(comment => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${comment.id}`))
          //.json(CommentsService.serializeComment(comment))
          .send('testing')
      })
      .catch(next)*/
    })

module.exports = articlesRouter