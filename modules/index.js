const userRoutes = require ("./users/users.routes");
const blogRoutes = require ("./blogs/blogs.routes");


console.log("inside index.js");

module.exports = {userRoutes, blogRoutes};
