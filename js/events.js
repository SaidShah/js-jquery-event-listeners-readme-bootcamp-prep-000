//define functions here

$(document).ready(function(){

// call functions here

});


function getIt(){
  $(`p`).on(`click`, function(){
    alert("Hey!")
  })
}


function frameIt(){
  
  $(`img`).on(`load`,function(){
    $(`img`).addClass(`tasty`)
  })
  
}

function pressIt(){
  
  $(document).on(`keydown`,function(key){
    if(key.keycode === 71){
      alert("G key was pressed")
    }
  })
  
  
}
