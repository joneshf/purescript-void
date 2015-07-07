'use strict'

var gulp        = require('gulp')
  , bump        = require('gulp-bump')
  , filter      = require('gulp-filter')
  , git         = require('gulp-git')
  , purescript  = require('gulp-purescript')
  , runSequence = require('run-sequence')
  , tagVersion  = require('gulp-tag-version')
  ;

var paths = {
    src: ['src/**/*.purs', 'bower_components/purescript-*/src/**/*.purs'],
    ffi: ['src/**/*.js', 'bower_components/purescript-*/src/**/*.js'],
    dest: '',
    docsDest: 'README.md',
    manifests: [
      'bower.json',
      'package.json'
    ]
};

var options = {
    compiler: {},
    pscDocs: {}
};

function bumpType(type) {
    return gulp.src(paths.manifests)
        .pipe(bump({type: type}))
        .pipe(gulp.dest('./'));
}

gulp.task('tag', function() {
    return gulp.src(paths.manifests)
        .pipe(git.commit('Update versions.'))
        .pipe(filter('bower.json'))
        .pipe(tagVersion());
});

gulp.task('bump-major', function() {
    return bumpType('major')
});
gulp.task('bump-minor', function() {
    return bumpType('minor')
});
gulp.task('bump-patch', function() {
    return bumpType('patch')
});

gulp.task('bump-tag-major', function() {
    return runSequence('bump-major', 'tag');
});
gulp.task('bump-tag-minor', function() {
    return runSequence('bump-minor', 'tag');
});
gulp.task('bump-tag-patch', function() {
    return runSequence('bump-patch', 'tag');
});

gulp.task('make', function() {
    return purescript.psc({ src: paths.src, ffi: paths.ffi });
});

gulp.task("docs", function() {
  return purescript.pscDocs({
    src: paths.src,
    docgen: {
      "Data.Void": "README.md"
    }
  });
});

gulp.task('watch-make', function() {
    gulp.watch(paths.src, ['make', 'docs']);
});

gulp.task('default', ['make', 'docs']);
