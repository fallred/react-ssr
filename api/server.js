let express= require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let app = express();
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));
let users = [{id: 1,name: 'zfjg1'}, {id: 2, name:'zfjg2'}];
app.get('/api/users',function(req,res){
    res.json(users);
});
app.listen(4000);