module.exports = (grunt) => {
  'use strict'

  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*', '!grunt-template-*']
  })

  grunt.initConfig({
    clean: {
      build: 'build'
    },
    copy: {
      app: {
        files: [
          { cwd: 'src/assets/', expand: true, src: ['**'], dest: 'build' },
          { cwd: 'src/app/', expand: true, src: ['**/*.js'], dest: 'build' }
        ]
      }
    },
    concat: {
      render: {
        src: ['./src/app/components/**/*/render.js'],
        dest: './build/render.js'
      },
      style: {
        src: ['./src/app/components/**/*.css'],
        dest: './build/style.css'
      }
    }
  })

  grunt.registerTask('build', ['clean', 'copy', 'concat'])
}
