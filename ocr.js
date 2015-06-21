var nodecr = require('nodecr');
var ocr = {
  process : function(name, callback){
    nodecr.process(__dirname + '/' + name, function(err, text) {
        if(err)
          console.error(err);
        else{
            callback(text.replace(/\s+/g," ").replace(/(^\s+)|(\s+$)/,''));
        }
    });
  }
};

module.exports = ocr;
