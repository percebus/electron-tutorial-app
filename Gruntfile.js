module.exports = (grunt) => {
  'use strict'

  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*', '!grunt-template-*']
  })

  grunt.initConfig({
    yamllint: {
      github: {
        src: ['.github/workflows/**/*.yml']
      }
    },
    clean: {
      tests: 'tests',
      build: 'build'
    },
    copy: {
      app: {
        files: [
          { cwd: 'src/assets/', expand: true, src: ['**'], dest: 'build' },
          { cwd: 'src/app/', expand: true, src: ['**/*.js', '!**/*.spec.js', '!**/*/render.js'], dest: 'build' }
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

  grunt.registerTask('lint:yaml', ['yamllint'])
  grunt.registerTask('lint', ['lint:yaml'])

  grunt.registerTask('build', ['clean', 'copy', 'concat'])
  grunt.registerTask('default', ['build'])
}
