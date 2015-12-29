module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        browserify: {
          dist: {
            files: {
                'anchietacult.js': ['src/js/routes.js']
            },
            options: {
                browserifyOptions: {
                    debug: true
                },
                transform: ['jstify']
            }

          },
          production: {
            files: {
                'anchietacult.js': ['src/js/routes.js']
            },
            options: {
                transform: ['jstify']
            }
          }
        },

        uglify: {
            options: {
                mangle: false
            },
            all: {
                files: {
                    'anchietacult.js': "anchietacult.js"
                }
            }
        },

        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/scss',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },

        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: [ '*.css'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        
        watch: {
            scripts: {
                files: ["**/*.js", "src/**/*.html"],
                tasks: ["browserify"]
            },
            style: {
                files: "**/*.scss",
                tasks: ["sass"]
            },
        }
    });
    
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['browserify:dist', 'sass']);
    grunt.registerTask('production', ['browserify:production', 'sass', 'uglify', 'cssmin']);

};