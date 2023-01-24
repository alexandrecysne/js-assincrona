//função assincrona com callback
function enviarEmail(corpo, para, callback){
    setTimeout(() => {
        console.log(`
            Para: ${para}
            -----------------------------------
            ${corpo}
            -----------------------------------
            De: Alexandre Cysne Esteves
        `)

        var deuErro = true;

        //tratamento de erros em callbacks
        if(deuErro){
            //Parâmetros em callbacks
            callback('ERRO',1,'2s','O envio do e-mail falhou!');
        }else{
            //Parâmetros em callbacks
            callback('OK',1,'8s');            
        }

    },8000)
}

console.log("Inicio do envio de e-mail!")

enviarEmail("Oi, seja bem vindo ao estudos de node.js","alexandre.cysne@gmail.com", (status,amount,time,erro)=> {
    console.log(`
    Status: ${status}
    -----------------------------------
    Contatos: ${amount}
    -----------------------------------
    Tempo de envio: ${time}
    `)

    if(erro == undefined){//envio ok
        console.log("Seu e-mail foi enviado, deve chegar em minutos")
        console.log("Tudo ok!")
    }else{//opa, deu erro!
        console.log('Ocorreu um erro: ' + erro)
    }
})
