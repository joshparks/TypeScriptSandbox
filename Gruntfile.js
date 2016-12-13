module.exports = function (grunt) {
    
	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 1234,
                    base: './app/'
                }
            }
        },
        typescript: {
            base: {
                src: ['./app/ts/**/*.ts'],
                dest: './app/js/app.js',
                options: {
                    module: 'amd',
                    target: 'es5'
                }
            }
        },
        watch: {
            files: './app/code/**/*.ts',
            tasks: ['typescript']
        },
        open: {
            dev: {
                path: 'http://localhost:1234/index.html'
            }
        }
    });
 
	grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    
    grunt.registerTask('default', ['connect', 'open', 'watch']);
 
}