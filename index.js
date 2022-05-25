const { data }= require("./data");
const boxen = require('boxen');
const chalk = require('chalk');


const boxenOpts = {
  margin: 1,
  float: 'center',
  padding: {top:1, bottom: 1, right: 8, left: 8},
  borderStyle: "bold",
  borderColor: "cyan",
};

const me = 
[
  `                ${data.name}`,
  ``,
  `${data.labelFact}  ${data.fact}`,
  `${data.labelTitle}  ${data.title}`,
  `${data.labelTwitter} ${data.twitter}`,
  `${data.labelGitHub}  ${data.github}`,
  `${data.labelNpm}  ${data.npm}`,
  ``,
  `${data.labelCard}  ${data.npx}`,
  ``,
  `                     (｡◕  ‿  ◕ ｡)`
].join("\n")


module.exports = () => boxen(me, boxenOpts);