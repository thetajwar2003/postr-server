const postResolvers = require('./posts');
const usersResolvers = require('./users');
const commentsResolvers = require('./comments');

// process the query and return what the query returns
module.exports = {
    Post: {
        likeCount: (parent) => parent.likes.length,
        commentCount: (parent) => parent.comments.length
    },
    Query: {
        ...postResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postResolvers.Mutation,
        ...commentsResolvers.Mutation
    },
    Subscription: {
        ...postResolvers.Subscription
    }
};