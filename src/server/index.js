import Home from '../containers/Home';
let express = require('express');
let app = express();
app.get('/', function(req,res){
    res.send(`
        <html>
            <head>
                <title>珠峰ssr</title>
            </head>
            <body>
                <div id="root"></div>
                <script>
                    document.getElementById('root').innerHTML = 'hello'
                </script>
            </body>
        </html>
    `);
});
app.listen(3000, function(){
    console.log('server started at port 3000');
});