var exports = module.exports;
exports.init = function(req, res){

      var scripts = [
        {script: 'js/keyvaluemanager.js'}
      ];
      var context = {
        layoutData: {
        scripts: scripts,
        // styles: styles,
        meta: {
          author: 'Dave Lawson',
          description: '',
          keywords: '',
          robots: ''
        }
      }
    };
  res.render("pages/keyvaluemanager", context);
}
