module.exports = function(app, db) {
  //when app recieves a post request to the '/notes' path, it will execure the code inside the callback-passing 
  //in a request object(which contains the parameters of JSON of the request) and a response object (used to reply)
  app.post('/notes', (req, res) => {
    console.log(req.body)
    //create not here
    res.send('Hello')
  });
};