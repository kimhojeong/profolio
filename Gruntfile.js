module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    serve: {
        options: {
            port: 9000
        }
    },
    less: {
        product: {
            options: {
            paths: ['assets/css'],
            compress:true
            },
            files: {
            'assets/css/style.min.css': 'assets/less/import.less'
            }
        },
        development: {
            options: {
            paths: ['assets/css'],
            dumpLineNumbers:"comments"
            },
            files: {
            'assets/css/style.dev.css': 'assets/less/import.less'
            }
        }
        
     },
     watch: {
        scripts: {
            files: ['assets/less/*.less'],
            tasks: ['less'],
            options: {
            spawn: false,
            },
        },
        }
     
    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['serve']);

};