/*var cody = new Object();
cody.living=true;
cody.age=3;
cody.gender='male';
cody.getGender=function(){
    return cody.gender;
};
console.log(cody);*/
const myObject = new Object();
myObject['0']='f';
myObject['1']='o';
myObject['2']='o';
console.log(myObject);
const myString = new String('foo');
console.log(myString);
const person =function(living,age,gender)
{
    this.living=living;
    this.age=age;
    this.gender=gender;
    this.getGender=function(){
        return this .gender;
    }

};
const smith = new person(true,33,'male');
console.log(smith);

