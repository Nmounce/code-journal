CREATE REPO from local repo:
    git init
git add
git commit - m ""
heroku create(creates random address)
git remote - v
git push heroku master

heroku is env.where you can deploy your applications


    in server.js file - needs to have:
    const PORT = process.env.PORT || 3001;