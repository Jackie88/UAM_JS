module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      
      jshint: {
        options: {
          curly: true,
          eqeqeq: true,
          eqnull: true,
          browser: true,
          globals: {
            jQuery: true
          },
        },
        
        files: {
          src: ['src/**/*.js']
        },
      },
    
      concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: ['src/**/*.js'],
          dest: 'build/app.min.js',
        },
      },

	    uglify: {
	      options: {
          mangle: false,
	        //banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
	      },
	      build: {
	        src: 'src/**/*.js',
	        dest: 'build/app.min.js'
	      }
	    },

      watch: {
        scripts: {
          files: ['src/**/*.js'],
          tasks: ['jshint']
          }
      },

      obfuscator: {
          files: [
            'src/**/*.js'
          ],
          entry: 'app.js',
          out: 'build/obfuscated.js',
          strings: true,
          root: __dirname
        }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-obfuscator');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  //grunt.registerTask('default', ['uglify']);
   
};
