module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['gruntfile.js', 'js/**/*.js'],
            options: {
                globals: {
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'app/css/*.css',
                        'app/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './app'
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>', '/app/**/*.html'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('js', ['jshint']);

};