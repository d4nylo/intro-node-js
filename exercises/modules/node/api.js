const { users, posts } = require('./data');

const getUserById = (id, cb) => {
    const user = users.find(user => user.id === id);
    cb(user);
}

const getPostsForUser = (userId, cb) => {
    const _posts = posts.filter(post => post.createdBy === userId);
    cb(_posts);
}

module.exports = { getUserById, getPostsForUser };