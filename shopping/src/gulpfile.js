var gulp = require('gulp');
var sass = require('gulp-sass'); // module 선언
var sourcemaps = require('gulp-sourcemaps');
// const uitIndex = require('gulp-nts-uit-index-helper');

gulp.task('sass', function() { // gulp $ 명령어
  return gulp.src('./scss/**/*.scss') // sass 파일 경로
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./css')); // 변환 css 생성 위치
});

gulp.task('watch', function() {
  gulp.watch('./scss/**/*.scss', ['sass', 'sourcemaps']); // 변경 사항을 주시해야될 대상 경로
});

gulp.task('sourcemaps', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps')) // css와 동일 레벨에 .map 파일 생성
    .pipe(gulp.dest('./css'));
});


// gulp.task('uit_index', function() {
//   gulp.src(['./src/*.html', './src/*/*.css']) // 인덱스 대상 파일 선택
//     .pipe(uitIndex({ // 옵션 설정.
//       filename: '@index',
//       title: '마크업 산출물',
//       exJs: false,
//       html: true,
//       qrcode: true,
//       fold: true,
//       fileSort: 'file',
//       groupSort: 'asc',
//     }))
//     .pipe(gulp.dest('./src/')); // 인덱스 저장 경로
// });
