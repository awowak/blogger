Simple Blogger app for PTWDI
On your blogger app,

Add a Comment model to new file Comment.js in models/, with a "content" column of data type Sequelize.TEXT
Add one-to-many association: in models/index.js, add 2 Sequelize statements for "post has many comments" and "a comment belongs to a post". Hint: they should look like the one-to-many association between User and Post.
Add a fixtures file comments.json to fixtures/ that is a list of comment fixtures. Each fixture should include a "content" property.
In seed.js, sync your Comment model ONLY AFTER the Post model is done syncing. (Hint: How did we do this for Profile and User? How did Profile get created only after User was created?)
Create a comments router in routes/comments.js with a GET / route.
Mount the comments router in app.js, so that `GET /` in routes/comments.js goes to localhost:3000/comments. Hint: how did we do this for the posts router? Don't forget to include appropriate node modules as dependencies! (var comments = require('./routes/comments');)
In the GET / route of the comments router, we want to show all comments, like we do for showing all posts in the GET / route of the posts router. To do this, we'll need to create its appropriate view and controller. We already made its model (models/Comment.js)
In the GET / route of the comments router, we want to show all comments, like we do for showing all posts in the GET / route of the posts router. To do this, create a view called comments.ejs in views/
Inside views/comments.ejs, render a table of the contents of each comment, like we did for viewing all posts in views/index.ejs. It should include a table with header "contents" and rows including comment contents. Hint: how did we do this in views/index.ejs for posts?
Now we want to show each comment's post title in another column in the table.

In views/comments.ejs, add a second column to the table with header "post".
Make the column include each comment's post title. Hint: how did we do this in views/index.ejs for post authors?
Be able to go to localhost:3000/comments and see the comments' contents and the title of the posts that the comments belong to!