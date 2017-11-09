var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/loremText.txt',{encoding: 'utf8'});

var writable = fs.createWriteStream(__dirname + '/loremTextCopy.txt');

var compressed = fs.createWriteStream(__dirname + '/comprerssedLoremText.txt.gz');

var gzip = zlib.createGzip();

readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);

//alternative of PIPE
// readable.on('data', function(chunk){
//   console.log(chunk );
//   writable.write(chunk);
// });