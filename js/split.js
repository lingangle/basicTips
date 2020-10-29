/*
 * @Author: your name
 * @Date: 2020-10-26 14:46:51
 * @LastEditTime: 2020-10-28 11:50:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \basicTips\js\split.js
 */
let getQueryStringArgs = function(){
  let qs = (location.search.length > 0 ? location.search.substring(1) : "");
  let args = {};
  for(let item of qs.split('&').map(kv => kv.split('='))){
    let name = decodeURIComponent(item[0]);
    let value = decodeURIComponent(item(1));
    if(name.length){
      arg[name] = value;
    }
  }
  return args
}



// 寄生式组合继承

function object(o){
  function F(){}
  F.prototype = o;
  return new F();
}

/**
 * @name:
 * @test: test font
 * @msg:
 * @param {*} subtype 子类构造函数
 * @param {*} superType 父类构造函数
 * @return {*}
 */
function inheritPrototype(subtype,superType){
  // 创建对象
  let prototype = object(superType.prototype);
  // 增强对象
  prototype.constructor = subtype;
  // 赋值对象
  subtype.prototype = prototype;
}


