session- exp plug in that allows us to communicate with browser to create a 'session'- tracks which user is making requests to the server.

You have to install express - session
then Set up sessions
const sess = {
  secret: 'Super secret secret', //hased string you keep in your .env file//required
  resave: false, //forces the session to be saved to the session storage
  saveUninitialized: false, //forces a session to be saved to the storage (saves login info)
};
app.use(session(sess));

req.session.save(() => {
  // We set up a session variable to count the number of times we visit the homepage
  if (req.session.countVisit) {
    // If the 'countVisit' session variable already exists, increment it by 1
    req.session.countVisit++;
  } else {
    // If the 'countVisit' session variable doesn't exist, set it to 1
    req.session.countVisit = 1;
  }

  res.render('homepage', {
    galleries,
    // We send over the current 'countVisit' session variable to be rendered
    countVisit: req.session.countVisit,
  });
});
} catch (err) {
console.log(err);
res.status(500).json(err);
}
});

//STORE IN CONTROLLERS FOLDER