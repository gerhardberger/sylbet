var ocr     = require('./ocr'),
    express = require('express'),
    multer  = require('multer'),
    fs      = require('fs'),
    sift    = require('sift-string'),
    app     = express();

app.use(express.static('public'));
app.use(multer({ dest: './tmp/'}));

function find_match(str1, str2){
  var pos = -1;
  var match = str1.length+1;

  for(var i = 0; i<str2.length-str1.length;i++){
    var m = sift(str1.toLowerCase(),str2.substr(i,str1.length).toLowerCase());
    if(m<match){
      match = m;
      pos = i;
    }
  }

  return pos;
}

app.post('/score-upload', function(req, res, next) {
    var team1 = req.body.team1,
        team2 = req.body.team2;

    console.log(team1 + " VS " + team2);

    ocr.process(req.files.thumbnail.path, function(text){
      fs.unlink(req.files.thumbnail.path);

      res.write(text);

      var t1, t2, score = text.match(/([0-9]+)[\s-\.]+([0-9]+)/i), s1=0, s2=0;

      if(score!=null){
        s1 = score[1];
        s2 = score[2];
      }

      if(find_match(team1, text)<find_match(team2, text)){
        t1 = team1;
        t2 = team2;
      }else{
        t1 = team2;
        t2 = team1;
      }

      res.write(t1 + " score = " + s1 + "\n");
      res.write(t2 + " score = " + s2 + "\n");
      if(s1>s2){
        res.write(t1 + " won\n");
      }else if(s2>s1){
        res.write(t2 + " won\n");
      }else{
        res.write("draw\n");
      }

      res.end();
    });
});

app.listen(3000);

//ocr.process('test5.jpg', console.log);
