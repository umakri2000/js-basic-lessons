function getChild(parent)
{
    if(parent == null)
    return Object.create(parent);
}
/*let o4={x:"don'tchange this file"};
//console.log(o4.x);
o4=null;
//p= getChild(o4);
//console.log(p);
Object.prototype=0;
//console.log(Object);*/
let o5={};
console.log(o5);
o5.x=100;
console.log(o5);
 let p=getChild(o5);
console.log(p);
p.y=200;
let q=getChild(p);
q.z=300;
console.log(q);
console.log("q.x + q.y + q.z"+(q.x+q.y+q.z));
/*console.log("p.x +p.y"+(p.x+p.y));
console.log("o5.x+o5.y"+(o5.x+o5.y));*/