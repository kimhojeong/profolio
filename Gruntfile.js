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
        includes: {
            files: ['html/**/*.html'],
            tasks: ['includes'],
            options: {
                spawn: false,
            },
        },
      },
      includes: { //복수로 여러개
      dist:{
          cwd:'html', //current working directory 현재경로
          src:['*.html','includes/*.html'], //대상파일들
          dest:'./dist', //destination 만들어진 파일이 들어갈 경로. 목적지
          options:{
              flatten:true,
              includePath:'html/includes/' //Indicates the path(s) to use when looking for included files.포함된 파일들 찾을때 사용할 경로.
          }
      }
    },



  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-includes');



  // Default task(s).
  grunt.registerTask('default', ['serve']);

};
