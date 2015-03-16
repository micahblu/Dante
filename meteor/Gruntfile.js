module.exports = function(grunt) {

  grunt.initConfig({
    exec: {
      'meteor-init': {
        command: [
          // Make sure Meteor is installed, per https://meteor.com/install.
          // The curl'ed script is safe; takes 2 minutes to read source & check.
          'type meteor >/dev/null 2>&1 || { curl https://install.meteor.com/ | sh; }'
          // Meteor expects package.js to be in the root directory of
          // the checkout, so copy it there temporarily
          //'cp package.js ../'
        ].join(';')
      },
      // !- only add this if there was no "clean" task
      'meteor-cleanup': {
        // remove build files and package.js
        command: 'rm -rf .build.* versions.json package.js'
      },
      'meteor-test': {
        command: 'node_modules/.bin/spacejam --mongo-url mongodb:// test-packages ./'
      },
      'meteor-publish': {
        command: 'meteor publish'
      }
    }
  });


  grunt.loadNpmTasks('grunt-exec');


  // Meteor tasks
  grunt.registerTask('meteor-test', ['exec:meteor-init', 'exec:meteor-test']);
  grunt.registerTask('meteor-publish', ['exec:meteor-init', 'exec:meteor-publish', 'exec:meteor-cleanup']);
  grunt.registerTask('meteor', ['exec:meteor-init', 'exec:meteor-test', 'exec:meteor-publish', 'exec:meteor-cleanup']);

};