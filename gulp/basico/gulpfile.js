const gulp = require('gulp')

gulp.task('default', () => {
    console.log('Ok!')
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {   // antes de executar 'copiar', 
                                                    // executa antes1 e antes2
    // console.log('Copiar!!!')
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    // gulp.src(['pastaA/arquivo1.txt'])
    // gulp.src('pastaA/arquivo1.txt')
    // gulp.src('pastaA/*.txt')         // copia todos os arquivos
    gulp.src('pastaA/**/*.txt')         // copia todos os arquivos e pastas
        // .pipe(transformacao1())                  // padrão pipe and filter
        // .pipe(transformacao2())
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {
    console.log('Antes 1!!!')
})

gulp.task('antes2', () => {
    console.log('Antes 2!!!')
})

gulp.task('fim', ['fim1', 'fim2'])

gulp.task('fim1', () => {
    console.log('Fim1!!!')
})

gulp.task('fim2', () => {
    console.log('Fim2!!!')
})