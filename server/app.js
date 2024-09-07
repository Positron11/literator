var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// Temporary api template
app.get("/api", (req, res) => {
  res.json({
    "stories":
      [
        {
          "id": "0001",
          "title": "The Curious Case of Benjamin Button",
          "category": "Period Fiction",
          "startDate": "27/12/2022",
          "lastUpdated": "07/09/2024",
          "content": "As long ago as 1860 it was the proper thing to be born at home. At present, so I am told, the high gods of medicine have decreed that the first cries of the young shall be uttered upon the anaesthetic air of a hospital, preferably a fashionable one.",
          "authors": [
            "OunceOfShag",
            "Inshallah",
            "Jason Mendoza"
          ]
        },
        {
          "id": "0002",
          "title": "To Kill a Mockingbird",
          "category": "Legal Fiction",
          "startDate": "12122022",
          "lastUpdated": "07092024",
          "content": "Atticus said to Jem one day, “Id rather you shot at tin cans in the backyard, but I know youll go after birds. Shoot all the blue jays you want, if you can hit em, but remember its a sin to kill a mockingbird.” That was the only time I ever heard Atticus say it was a sin to do something, and I asked Miss Maudie about it. “Your fathers right,” she said.",
          "authors": [
            "OunceOfShag",
            "Panam Palmer"
          ]
        },
        {
          "id": "0003",
          "title": "In Search of Lost Time",
          "category": "Surreal Fiction",
          "startDate": "03012023",
          "lastUpdated": "07092024",
          "content": "Believe that we can change the things around us in accordance with our desires—we believe it because otherwise we can see no favourable outcome. We do not think of the outcome which generally comes to pass and is also favourable: we do not succeed in changing things in accordance with our desires, but gradually our desires change.",
          "authors": [
            "OunceOfShag",
            "Jaxson Hayes"
          ]
        }
      ],
      "bulletin":
      [
        {
        "date": "07092024",
        "content": "Dark spruce forest frowned on either side of the frozen waterway."
        },
        {
          "date": "02092024",
          "content": "The trees had been stripped by a recent wind of their white covering of frost, and they seemed to lean toward each other, black and ominous, in the fading light."
        },
        {
          "date": "27082024",
          "content": "A vast silence reigned over the land. The land itself was a desolation, lifeless, without movement, so lone and cold that the spirit of it was not even that of sadness. There was a hint in it of laughter, but of a laughter more terrible than any sadness — a laughter that was mirthless as the smile of the Sphinx, a laughter cold as the frost and partaking of the grimness of infallibility."
        }
      ]
  }
)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
