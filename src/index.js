import _ from 'lodash';
import printMe from "./print.js"

function component(){
    var element = document.createElement("div");
    var btn = document.createElement('button')
  // Lodash, now imported by this scrip
    element.innerHTML = _.join(["真特么难学",'webpack'],'');

    btn.innerHTML = "点我完事看看console";
    btn.onclick = printMe;
    element.appendChild(btn)
    return element;
}
document.body.appendChild(component())