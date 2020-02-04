const mongoose = requrie('mongoose');

mongoose.connect('mongodb url', { useNewUrlParser: true}, (err) => {
    if(!err) {console.log('Mongodb Connection Succeeded.')}
    else {console.log('Error in DB connection : ' + err)}
});

require('./employee.model');