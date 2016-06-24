var express = require('express');

app = express();
app.use(express.static('/data/data/com.termux/files/home/ali/public'));
app.listen(8080);
console.log('server running on port 8080');
