//Atividade 1
function validandoDados(){
    let data = frmRegistro.inData.value;
    let nome = frmRegistro.inCli.value;
    let tel = frmRegistro.inFone.value;
    let mail = frmRegistro.inMail.value;
    let produto = frmRegistro.inProd.value;
    let qtd = frmRegistro.inQtd.value;
    let valor = frmRegistro.inVal.value;
    let erro = document.getElementById('mensagem-erro');
    erro.innerHTML = ''
    erro.style.display = 'none'
    let msg = document.getElementById('mensagem-erro')
    let campok = true;

    if (data.trim() == '') {
        erro.style.display = 'block';
        msg.textContent ='O campo data não pode estar vazio!';
        frmRegistro.inData.focus();
        campok = false;
        return false;
    }

    if (nome.trim() == '' || nome.length<5) {
        erro.style.display = 'block';
        msg.textContent ='O campo nome não pode estar vazio ou pequeno demais, cada campo deve ter no mínimo caracteres!';
        frmRegistro.inCli.focus();
        campok = false;
        return false;
    }

    if (tel.trim() == '' || tel.length<5) {
        erro.style.display = 'block';
        msg.textContent ='O campo Telefone não pode estar vazio ou está pequeno demais, todo campo deve ter no mínimo 5 caracteres!';
        frmRegistro.inFone.focus();
        campok = false;
        return false;
    }

    if (mail.trim() == '' || mail.length<5) {
        erro.style.display = 'block';
        msg.textContent ='O campo E-mail não pode estar vazio ou esta pequeno demais, todo campo deve ter no mínimo 5 caracteres!';
        frmRegistro.inMail.focus();
        campok = false;
        return false;
    }

    if (produto.trim() == '') {
        erro.style.display = 'block';
        msg.textContent ='O campo Produtos não pode estar vazio!';
        frmRegistro.inProd.focus();
        campok = false;
        return false;
    }

    if (qtd.trim() == '' || qtd<0) {
        erro.style.display = 'block';
        msg.textContent ='O campo Quantidade não pode estar vazio ou negativo!';
        frmRegistro.inQtd.focus();
        campok = false;
        return false;
    }

    if (valor.trim() == '' || qtd<0) {
        erro.style.display = 'block';
        msg.textContent ='O campo valor não pode estar vazio ou negativo!';
        frmRegistro.inVal.focus();
        campok = false;
        return false;
    }

    if(campok==true){
        erro.style.backgroundColor = 'greenyellow';
        erro.style.color = 'white';
        erro.style.display = 'block';
        msg.textContent ='Obrigado por preencher o formulário!';
     }

}

//Atividade 2
function atualizarDados() {
    let canvas = document.getElementById('canvas');
    let qtd = document.getElementById('inQtdImg');
    let elemento = '<img src="img/esquilo.jpg">';
    canvas.innerHTML = '';
    console.log(qtd)
    console.log(elemento)
    for (let i=0; i<qtd.value; i++) {
        canvas.innerHTML += elemento;
    }
}

//Atividade 3
function alterarLampada(){
    let imagem = document.getElementById('lampada')
    let caminho = imagem.src
    let arquivo = caminho.substring(caminho.lastIndexOf('/')+1)
    if(arquivo=='apagada.jpg'|| arquivo=='')
    imagem.src = 'img/acesa.jpg'
    else
    imagem.src = 'img/apagada.jpg'
}

//Atividade 4
function calcular() {
    var valor = document.getElementById('inValorPedido').value;
    var perc = document.getElementById('inPercDesc').value;
    var desc = document.getElementById('inValDesc').value;
    var valorL = document.getElementById('inValFinal').value;
  
    if (valor <= 500) {
        document.getElementById('inPercDesc').value = 0.5;
        document.getElementById('inValFinal').value = valor - (document.getElementById('inValDesc').value = (0.5 * valor) / 100);
    }
  
    if (valor < 0)
        alert('Somente valores positivos!'); {
        let valordesc = document.getElementById('inValDesc').value;
        let valor2 = valor - valordesc;
        var valorL = document.getElementById('inValFinal').value = valor2
    }
  
    if (valor > 500 && valor <= 1000) {
        document.getElementById('inPercDesc').value = 0.8;
        document.getElementById('inValFinal').value = valor - (document.getElementById('inValDesc').value = (0.8 * valor) / 100);
    }
    if (valor > 1000 && valor <= 1500) {
        document.getElementById('inPercDesc').value = 1.0;
        document.getElementById('inValFinal').value = valor - (document.getElementById('inValDesc').value = (1.0 * valor) / 100);
    }
    if (valor > 1500 && valor <= 2000) {
        document.getElementById('inPercDesc').value = 1.5;
        document.getElementById('inValFinal').value = valor - (document.getElementById('inValDesc').value = (1.5 * valor) / 100);
    }}


