 import webpack from 'webpack';
 import webpackConfig from '../webpack.config.prod';
 import colors from 'colors';

 /*eslint-disable no-console */
 process.env.NODE_ENV = 'production';
 console.log('Genreating');



 webpack(webpackConfig).run((err, stats) => {
     if(err){
        console.log(err.bold.red);
        return 1;
}


const jsonStats = stats.toJson();
if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
} 

if (jsonStats.hasWarnings) {
    console.log('Webpack Warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
}

console.log(`Webpack status ${stats}`);


console.log('App has been complited in produciton mode');
return 0;


 });