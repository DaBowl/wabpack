import _ from 'lodash';
import printMe from "./print.js"
import './styles.css'

function component(){
    var element = document.createElement("div");
    var btn = document.createElement('button')
  // Lodash, now imported by this scrip
    element.innerHTML = _.join(["真特么难学",'webpack',"我HTML文件咋没"],'');

    btn.innerHTML = "点我完事看看console";
    btn.onclick = printMe;
    element.appendChild(btn)
    return element;
}
document.body.appendChild(component())

if(module.hot){
  module.hot.accept('./print.js',function(){
    console.log('print这文件修改了');
    printMe();
  })
}