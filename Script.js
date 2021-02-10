let box = document.getElementById('box') 
function carregar(){
   if (box.checked == true){
      document.body.style.background = 'black'
      document.body.style.color = 'white'
      document.body.style.footer = 'white'
   }else if (box.checked == false){   
      document.body.style.background = 'white'
      document.body.style.color = 'black'
      document.body.style.footer = 'black' 
   }
      
}