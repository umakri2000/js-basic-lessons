const o=new Object();
const a=new Array();
const d=new Date();
const f1 = function (){
    console.log('The cow jumped over the Moon');
};
console.log("Date= "+d);
f1();
const o1 = Object.create({x:100,y:200});
console.log('x= '+o1.x + ' y= '+o1.y);
console.log(o1);
const o2=Object.create(null);
const o3=Object.create(Object.prototype);
console.log(o2);
console.log(o3);
let o4 ={x: "dont change this file"}
console.log(o4.x);
let p=Object.create(o4);
console.log(p);
o4=null;
 p=Object.create(o4);
console.log(p)
o4=null;
p=getChild(o4);
console.log(p)