const person ={
    first :'venkat',
    last :'krishnan',
     age:100

};
console.log(person.first);
console.log(person.last);
console.log(person.age);
person.first='tom';
person.last='jerry';
console.log(person.first);
console.log(person.last);
person.last=null;
console.log(person.last);
const empty={};
const point={x: 10, y:50};
const point2={x: point.x,y:point.y+1};
const book ={
    'main title':'java script'//property name include space
    'sub-title':'guide to java script for beginners'
    'for': 'students'//reserved keywords
    author:{
        first:'venkat',
        last : 'krishnan'
    }    
};
console.log(book['main title']);
console.log(book['sub-title']);
console.log(book)


