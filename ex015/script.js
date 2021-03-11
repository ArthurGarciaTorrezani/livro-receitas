function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if(Number(fano.value) == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 16){
               img.setAttribute('src', 'criançah.png')
            }else if(idade < 25){
                img.setAttribute('src', 'jovemh.png')
            }else if(idade < 60){
                img.setAttribute('src', 'adultoh.png')
            }else{
                img.setAttribute('src', 'veioh.png')
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 16){
                img.setAttribute('src', 'criançam.png')
             }else if(idade < 25){
                 img.setAttribute('src', 'jovemm.png')
             }else if(idade < 60){
                 img.setAttribute('src', 'adultam.png')
             }else{
                 img.setAttribute('src', 'veiam.png')
             }
        }
        res.style.textAlign='center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}