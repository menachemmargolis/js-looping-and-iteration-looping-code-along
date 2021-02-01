// Code your solutions in this file
const  gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    let i = 0;
    while( i < gifts.length){
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
        i++
    }
   return gifts
}


function writeCards(names,occasion){
    
    for(let i = 0; i < names.length; i++ ){
        console.log(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
        
    }
   return names
}

function counDown(num){
  for(let i = num; i  > 0 ; i--){
      console.log(i)
  }
}
counDown(14);



writeCards(["Ada", "Brendan", "Ali"], "birthday"); 
wrapGifts(gifts);