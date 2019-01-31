// Webpack v4
// https://medium.com/nuances-of-programming/как-с-нуля-создать-проект-на-react-используя-webpack-4-и-babel-172c256d228

const modeConfig = env => require(`./build-utils/webpack.${env.mode}.js`)(env);

module.exports = (env) => {

  return modeConfig(env)
};