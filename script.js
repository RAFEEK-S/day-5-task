 // anonymous functio // odd numbers  
var star = function(array){
for( var i=0;i<array.length;i++){
if(array[i]%2!==0) {
console.log(array[i]); 
}
}
}
star([1,2,3,4,5,6,7,8,9]);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//IIFE // odd numbers

(function(varisu){
for( var i=0;i<varisu.length;i++){
if(varisu[i]%2!==0) {
 console.log(varisu[i]); 
}
}
})
([1,2,3,4,5,6,7,8,9]);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//anonymous function // sum of all numbers 
var dhanush = function(array){
    let thunivu =array.reduce((acc,cv)=>(acc+cv));
    console.log(thunivu);
}
dhanush([1,2,3,4,5,6,7,8,9]);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 //IIFE // sum of all numbers

(function(vivegam){
let gilli =vivegam.reduce((acc,cv)=>(acc+cv));
console.log(gilli);
})
([1,2,3,4,5,6,7,8,9]);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//arrow function // sum of all numbers

let animals=((dog)=>{
   let cat=dog.reduce((cvv,dc)=>(cvv+dc));
      console.log(cat);

})
animals([1,2,3,4,5,6,7,8,9]); 
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//arrow // sum of all odd numbers

let flowers=((rose)=>{
for(let i=0;i<rose.length;i++){
   if(rose[i]%2 !=0){
    console.log(rose[i]);
}
}
})
 flowers([1,2,3,4,5,6,7,8,9]);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//  let madras='tamilnadu';
//  let first=madras.charAt(0);
//  let second=madras.slice(1);
//  let third=first.toUpperCase();
//   let final=third+second; 
//   console.log(final);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  
 //string to title caps in a array // anonymous function
  
    let letters=function(alphabet){
    for(let i=0; i<alphabet.length;i++){
    alphabet[i]=alphabet[i].charAt(0).toUpperCase() + alphabet[i].slice(1);
    }
    console.log(alphabet);
    }
    letters(['australia','america','england']);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


  //anonymous function //find out median(1) 

  let flight=[1,5,8,7,3,9];
 let jet =[10,2,6,4,11];

 let train=flight.concat(jet);

(function(train){
    let bus=train.sort((a,b)=>(a-b));
    
console.log(bus);
     
   let plants=bus;
     
   if (plants.length%2 !=0){
       let median1=((11+1)/2)
       console.log(median1);

} else if(plants.length%2 ==0)  {
    // console.log('invalid')

      let fire=((plants.length/2))
     console.log(fire);

}else{

console.log('out');
}

})
(train);
  
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//anonymous function //find out median(2) 

let bushes=function(air){


 if(air.length%2 !=0){
    let median2=((air.length+1)/2);
    console.log(median2);


 }else if(air.length%2 ==0){
    let wind=((air.length/2));
    console.log(wind);

    
 }else{

    console.log("invalid");
 }


    }
    bushes([2,4,6,8,9].sort()); 

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// to find duplicates in a array // anonymous

    
    let hello = function(destiny){

    let tout=destiny.filter((item,index)=>destiny.indexOf(item) !== index);

    // let nab=tout(destiny);

    console.log(tout);
    }
    hello([1,2,1,2,3,4,5,6]);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


let fullshow='appa';

    for(let i=0;i<2;i++){

        if(fullshow[i] === fullshow[4-1-i]){

            console.log('palindrome')
        }else{

            console.log('not palindrome')
        }
    }

            
        
        