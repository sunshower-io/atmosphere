var gulp = require('gulp');
var Karma = require('karma').Server;

/**
 * Run test once and exit
 */
// gulp.task('test', ['clean'], function (done) {
//   new Karma({
//     configFile: __dirname + '/../../karma.conf.js',
//     singleRun: true
//   }, done).start();
// });

// gulp.task('test', function(done) {
//     karma.start({
//         configFile: __dirname + '/karma.conf.js',
//         singleRun: true
//     }, function() {
//         done();
//     });
// });

var gutil = require('gulp-util');

gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, function(err){
        if(err === 0){
            done();
        } else {
            done(new gutil.PluginError('karma', {
                message: 'Karma Tests failed'
            }));
        }
    }).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', ['clean'], function (done) {
  new Karma({
    configFile: __dirname + '/../../karma.conf.js'
  }, done).start();
});
