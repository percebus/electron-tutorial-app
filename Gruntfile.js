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
      build: {
        src: ['./src/app/components/**/*/render.js'],
        dest: './build/render.js'
      }
    }
  })

  grunt.registerTask('build', ['clean', 'copy', 'concat'])
}
