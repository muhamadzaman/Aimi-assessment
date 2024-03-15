module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'dart-sass': {
      target: {
        files: {
          'dist/css/styles.css': 'src/scss/styles.scss'
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/js/script.min.js': 'src/js/script.js'
        }
      }
    },

    copy: {
      html: {
        expand: true,
        cwd: 'src/',
        src: ['*.html'],
        dest: 'dist/'
      }
    },

    watch: {
      css: {
        files: 'src/scss/**/*.scss',
        tasks: ['dart-sass']
      },
      js: {
        files: 'src/js/**/*.js',
        tasks: ['uglify']
      },
      html: {
        files: 'src/**/*.html',
        tasks: ['copy:html']
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: ['dist/css/*.css', 'dist/js/*.js', 'dist/*.html']
        },
        options: {
          watchTask: true,
          server: './dist'
        }
      }
    }
  })

  // Register tasks
  grunt.registerTask('default', [
    'dart-sass',
    'uglify',
    'copy',
    'browserSync',
    'watch'
  ])
}
