const { render } = require("prettyjson");
const data = require("./data");
const boxen = require('boxen');
const figlet = require('figlet')
const nome =  "EstDevs Pablo Card"



const renderOpts = {
  dashColor: "magenta",
  keysColor: "rainbow",
  stringColor: "cyan",
  multilineStringColor: 'white'
};

const boxenOpts = {
  margin: 1,
  float: 'center',
  padding: 1,
  borderStyle: "bold",
  borderColor: "green",
};

const figletOpts = {
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 300,
  whitespaceBreak: true,
};

const finalRender = render(data, renderOpts)

figlet . text ( nome , figletOpts,  function ( err ,  data )  { 
  if  ( err )  { 
      console . log ( 'Algo deu errado...' ) ; 
      console . log( erro ) ; 
      return ; 
  } 
  console . log ( data ) ; 
} ) ;

module.exports = () => boxen(finalRender, boxenOpts);