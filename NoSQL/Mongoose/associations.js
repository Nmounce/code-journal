//In queries, ypu can 'populate' data from associated models(no joins).IN
app.get("/populateduser", async (req, res) => {
    // TODO
    // =====
    // Write the query to grab the documents from the User collection,
    // and populate them with any associated Notes.
    // TIP: Check the models out to see how the Notes refers to the User
    try {
        const userData = await db.User.find({}).populate('notes')
        res.json(usersData)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});