const chalk = require("chalk");

const data = {
  name: chalk.bold.cyan.underline("Pablo Kauã - pablokaua"),
  title:  chalk.bgWhite.black.bold(" I'm Pablo and I study to be a front-end developer "),
  fact: chalk.hex('#F8FF09')('I do not like cheese'),
  twitter: chalk.hex('#00A1D9')(" https://twitter.com/pablokauaah"),
  github: chalk.hex('#E300CB')("https://github.com/pablokaua"),
  npm:chalk.hex('#FF0000')("https://www.npmjs.com/~pablokaua"),
  npx: chalk.bgWhite.black.bold(" npx pablokaua "),

  labelFact: chalk.hex('#FFFFFF').bold("FunFact:"),
  labelTwitter: chalk.hex('#FFFFFF').bold("Twitter:"),
  labelGitHub: chalk.hex('#FFFFFF').bold(" GitHub:"),
  labelCard: chalk.hex('#FFFFFF').bold("   Card:"),
  labelNpm: chalk.hex('#FFFFFF').bold("    Npm:"),
  labelTitle: chalk.hex('#FFFFFF').bold("  title:")
};

module.exports = {
  data
}


