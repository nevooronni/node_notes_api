const { ObjectID } = require("mongodb");

module.exports = function(app, db) {  
  //when app recieves a post request to the '/notes' path, it will execure the code inside the callback-passing 
  //in a request object(which contains the parameters of JSON of the request) and a response object (used to reply)


  //create a note
  app.post('/notes', (req, res) => {    
    const note = { 
      text: req.body.body, title: req.body.title 
    };    
    //create note
    db.collection('notes').insert(note, (err, result) => {      
      if (err) {         
        res.send({ 'error': err, 'message': 'An error has occurred' });       
      } else {        
        res.send(result.ops[0]);      
      }    
    });  
  });

  //fetch a note
  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').findOne(details, (err, item) => {
      if(err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(item);
      }
    });
  });

  //update note 
  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id)};
    const note = { text: req.body.body, title: req.body.title};
    db.collection('notes').update(details, note, (err, result) => {
      if(err) {
        res.send({'error': 'An error has occurred'});
      } else {
        res.send({
          'message': 'note updated successfully',
          'update_info': note
        });
      }
    });
  });

  //delete note
  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').remove(details, (err, item) => {
      if(err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send({
          'message': 'note deleted successfully',
          'note_id': id
        });
      }
    });
  });
};
