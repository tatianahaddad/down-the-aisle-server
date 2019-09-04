const express = require('express')
const path = require('path')

const CommentsService = require('../services/comments-service')
const commentsRouter = express.Router()
const jsonBodyParser = express.json()

commentsRouter
  .route('/')
  .post(jsonBodyParser, (req, res, next) => {
    const { article_url, text, user_id } = req.body
    const newComment = { article_url, text, user_id }

    for (const [key, value] of Object.entries(newComment))
      if (value == null)
        return res.status(400).json({
          error: `Missing '${key}' in request body`
        })
        //res.send('text')
      
    //newComment.user_id = req.user.id
    CommentsService.insertComment(
      req.app.get('db'),
      newComment
    )
      /*.then(comment => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${comment.id}`))
          //.json(CommentsService.serializeComment(comment))
          .send('testing')
      })
      .catch(next)*/
    })

module.exports = commentsRouter