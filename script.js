/*Baseando-se nos conhecimentos obtidos com arrays, o objetivo é criar um sistema de login simplificado, nos seguintes moldes:
Criação de uma página de login;
Criação de uma página de cadastro;
Criação de uma página logado;
Utilizar arrays para armazenar dados;
1 array para username
1 array para password
Os arrays devem estar vinculados por index
Utilizaremos o window.location.href para transitar entre as págnas.
A entrega deve ser via github (de preferência, utilizando o pages).*/

let loginsCorretos = []
let senhasCorretas = []
let tentativasFalhas = []
function button1(){
    
    let login = document.getElementById('text').value
    let senhas = document.getElementById('password').value

    if(loginsCorretos.indexOf(login) != -1 && senhasCorretas.indexOf(senhas) != -1){
        window.open ('about.html')
        alert('SUUUPPEEEEER')
    }

    else{
        alert('Login e/ou senha incrorreta')
        // tentativasFalhas.push(login)
        // document.getElementById('lista').innerHTML = tentativasFalhas;
        document.getElementById('text').value = null;
        document.getElementById('password').value = null;

    }

}




function voltar(){
window.location.href='index.html'
}

function button2(){
    let loginNovo = document.getElementById ('text').value
    let senhaNova = document.getElementById ('password').value

    if(loginNovo != loginsCorretos && senhaNova != senhasCorretas){
        loginsCorretos.push(loginNovo)
        senhasCorretas.push(senhaNova)
        document.getElementById('text').value = null;
        document.getElementById('password').value = null;
        alert('Cadastro concluído!')
    }
}