module.exports = function(grunt) {

  grunt.initConfig({

    postcss: {

      options: {
        processors: [
          require('postcss-alias')(),
          require('postcss-crip')(),
          require('postcss-font-magician')(),
          require('postcss-triangle')(),
          require('postcss-circle')(),
          require('postcss-all-link-colors')(),
          require('postcss-center')(),
          require('postcss-clearfix')(),
          require('postcss-position')(),
          require('postcss-size')(),
          require('postcss-verthorz')(),
          require('postcss-color-short')()
        ]
      },
      dist: {
        src: 'src/style.css',
        dest: 'dest/style.css'
      }

    }
 
  });

  grunt.loadNpmTasks('grunt-postcss');

};