function tabuada(){
    var num = Number(document.getElementById('txtn').value)
    var tab = document.getElementById('seltab')
   
    if(num.value == 0){
        window.alert('[ERRO]  Digite um número!')
    }else{
        tab.innerHTML = ''
        for(c = 1; c<= 10; c++){
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
            tab.value = `${c}`
            
        }
    }
  
    
}

