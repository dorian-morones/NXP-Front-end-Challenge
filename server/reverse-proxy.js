var express = require('express');
var app = express();
var request = require('request');
var cors = require('cors');
var path = require('path');
var Chance = require('chance');
var chance = new Chance();

const createData = req => {
  let rowCount = (req.query && req.query.rows) || 100;
  let colCount = (req.query && req.query.cols) || 30;
  console.log('rowCount', rowCount);
  console.log('colCount', colCount);

  const data = { cells: [] };
  let header = [];
  let i = 0;
  for (let i = 0; i < colCount; i++) {
    header.push(`col-${i}`);
    // i++;
  }
  data.cells.push(header);

  for (let j = 1; j <= rowCount; j++) {
    let row = [];
    row.push(`part-${j}`);
    for (let i = 1; i <= colCount; i++) {
      row.push(chance.color({ format: 'hex' }));
      // row.push(`cell ${j},${i}`);
      // row.push(chance.string());
    }
    data.cells.push(row);
  }
  return data;
};

app.set('port', process.env.PORT || 5000);
app.options('*', cors());
app.use(cors());

app.use(function (err, req, res, next) {
  // Do logging and user-friendly error message display
  console.error(err);
  res.status(500).send('Something broke!');
});

app.use('/proxy', function (req, res, next) {
  if (req.url.length > 1 && req.url.indexOf('url') > -1) {
    var url = req.url.replace('/?url=', '');
    console.log('making request at ', url);
    req
      .on('error', function (err) {
        console.log('Error on request object: ', err);
      })
      .pipe(
        request(url),
        function (error, reposnse, body) {
          if (error) {
            console.log('Got a pipe error', error);
          }
        }
      )
      .on('error', function (err) {
        console.log('Error piping request', err);
      })
      .pipe(res)
      .on('error', function (err) {
        console.log('Error piping response', err);
      });
  } else {
    // res.send('foo');
    res.sendFile(path.join(__dirname + '/pages/index.html'));
    // next();
  }
});

app.get('/test', function (req, res) {
  res.sendFile(path.join(__dirname, 'db.json'));
});

app.get('/grid', function (req, res) {
  const data = createData(req);
  // res.jsonp(req.query);
  res.jsonp(data);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(app.get('port'), function () {
  console.log('api server is running on port', app.get('port'));
});
