// package metadata file for Meteor.js
'use strict';

var packageName = 'michelson:dante'
var where = 'client';

var packageJson = JSON.parse(Npm.require("fs").readFileSync('package.json'));

console.log(packageJson);

Package.describe({
  name: packageName,
  summary: 'A medium style wysiwyg editor',
  version: packageJson.version,
  git: 'https://github.com/michelson/Dante'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
  api.export('Dante');
  api.addFiles([
    '../bower_components/jquery/dist/jquery.min.js',
    '../bower_components/underscore/underscore.js',
    '../bower_components/sanitize.js/lib/sanitize.js',
    '../dist/0.0.10/js/dante-editor.js',
    '../dist/0.0.10/css/dante-editor.css',
    '../dist/0.0.10/images/dante/media-loading-placeholder.png',
    '../dist/0.0.10/fonts/dante/dante.eot',
    '../dist/0.0.10/fonts/dante/dante.svg',
    '../dist/0.0.10/fonts/dante/dante.ttf',
    '../dist/0.0.10/fonts/dante/dante.woff',
    '../dist/0.0.10/fonts/dante/fontello.eot',
    '../dist/0.0.10/fonts/dante/fontello.svg',
    '../dist/0.0.10/fonts/dante/fontello.ttf',
    '../dist/0.0.10/fonts/dante/fontello.woff'
  ], where);
});

Package.onTest(function (api) {
  api.use(packageName, where);
  api.use('tinytest', where);

  api.addFiles('../meteor/test.js', where);
});