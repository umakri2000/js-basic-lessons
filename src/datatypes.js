console.log('hello node !!');
function callme()
{
    var x=100;
    const y = x * 2;
    if(x<500){
        console.log('x < 500');
        const z= x + y;
        console.log(`z:${z}`);
    
    }
    if(y < 500){

        console.log(`y<500`);
        let v=x+y;
    }
}
console.log(callme()); 
