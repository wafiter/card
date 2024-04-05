const cores = ['red', 'yellow', 'aqua', 'violet', 'pink', 'orange']
        var baloes = document.getElementsByClassName('balao');

        for(var i = 0; i < baloes.length; i++)
        {
            baloes[i].addEventListener('webkitAnimationStart', mudarCor)
            baloes[i].addEventListener('webkitAnimationIteration', mudarCor)
        }
         
        function mudarCor(){
            this.style.backgroundColor = cores[Math.floor(Math.random()*cores.length)]
        }