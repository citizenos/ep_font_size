var eejs = require('ep_etherpad-lite/node/eejs/');

/******************** 
* UI 
*/ 
exports.eejsBlock_editbarMenuLeft = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_font_size/templates/editbarButtons.ejs");
  return cb();
}

exports.eejsBlock_dd_format = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_font_size/templates/fileMenu.ejs");
  return cb();
}


/******************** 
* Editor
*/

// Allow <whatever> to be an attribute 
exports.aceAttribClasses = function(hook_name, attr, cb){
  attr.fs8  = 'tag:fs8';
  attr.fs9  = 'tag:fs9';
  attr.fs10 = 'tag:fs10';
  attr.fs11 = 'tag:fs11';
  attr.fs12 = 'tag:fs12';
  attr.fs13 = 'tag:fs13';
  attr.fs14 = 'tag:fs14';
  attr.fs15 = 'tag:fs15';
  attr.fs16 = 'tag:fs16';
  attr.fs17 = 'tag:fs17';
  attr.fs18 = 'tag:fs18';
  attr.fs19 = 'tag:fs19';
  attr.fs20 = 'tag:fs20';
  cb(attr);
}

/******************** 
* Export
*/
// Include CSS for HTML export
exports.stylesForExport = function(hook, padId, cb){
  var css = "fs8{font-size:8px};"+
   "fs9{font-size:9px};"+
   "fs10{font-size:10px;}"+
   "fs11{font-size:11px;}"+
   "fs12{font-size:12px;}"+
   "fs13{font-size:13px;}"+
   "fs14{font-size:14px;}"+
   "fs15{font-size:15px;}"+
   "fs16{font-size:16px;}"+
   "fs17{font-size:17px;}"+
   "fs18{font-size:18px;}"+
   "fs19{font-size:19px;}"+
   "fs20{font-size:20px;}"
  cb(css);
};

// Add the props to be supported in export
exports.exportHtmlAdditionalTags = function(hook, pad, cb){
  cb(["fs8", "fs9", "fs10", "fs11", "fs12", "fs13", "fs14", "fs15", "fs16", "fs17", "fs18", "fs19", "fs20"]);
};