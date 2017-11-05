var exports = module.exports;
exports.init = function(req, res){

      var scripts = [
        {script: 'js/keyvaluemanager.js'}
      ];
      var context = {
        layoutData: {
        title: 'Rebel Dev Test (Key Value Manager)',
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
