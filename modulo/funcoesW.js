/********************************************************
* objetivo: criar API para fornecer dados para o Front
* data: 04/02/2025
* autor: sofia
* versão: 1.0
*********************************************************/

const whatsUser=require('./contatos')

// ok
const getDadosPessoais=function(number){
    let listaDados=[]
    whatsUser.contatos.whatsUsers.forEach(function(usuarios){
        if(String(usuarios.number).toUpperCase()==number.toUpperCase()){
            listaDados.push({
                nome: usuarios.account,
                criacao: usuarios['created-since'],
                numero: usuarios.number
            })
        }
    })
    return listaDados
}

//ok
const getDadosConta=function(number){
    let dadosConta=[]
    whatsUser.contatos.whatsUsers.forEach(function(nome){
        if(String(nome.number).toUpperCase()==number.toUpperCase()){
            dadosConta.push({
                nickname: nome.nickname,
                foto: nome['profile-image'],
                fundo: nome.background
            })
        }
    })
    return dadosConta
}

//ok
const getDadosContato=function(usuarios, contato){
    let usuario=String(usuarios).toUpperCase()
    let contatosUsuario=String(contato).toUpperCase()
    let contatosDoUsuario=[]
    whatsUser.contatos.whatsUsers.forEach(function(dados){
        dados.contacts.forEach(function(item){
            if(String(dados.number).toUpperCase()==usuario&&String(item.name).toUpperCase()==contatosUsuario){
                contatosDoUsuario.push({
                    nome: item.name,
                    foto: item.image,
                    descricao: item.description
                })
            }
        })
    })
    return contatosDoUsuario
}

//ok
const getConversas=function(usuario){
    let numUsuario=String(usuario).toUpperCase()
     conversasC=[]

    whatsUser.contatos.whatsUsers.forEach(function(dado){
        dado.contacts.forEach(function(dados){
            dados.messages.forEach(function(){
                if(numUsuario==dado.number){
                    conversasC.push({
                        nomes: dados.name,
                        conversas: dados.messages
                    })
                }
            })
        })
    })
    return conversasC
}

//ok
const getConversasComUsuario=function(usuario, contato){
    let nomeUsuario=String(usuario).toUpperCase()
    let contatos=String(contato).toUpperCase()
    conversasContatos=[]
    
    whatsUser.contatos.whatsUsers.forEach(function(dado){
            dado.contacts.forEach(function(dados){
                if(String(dado.number).toUpperCase()==nomeUsuario&&String(dados.name).toUpperCase()==contatos){
                    conversasContatos.push({
                        nome: dados.name,
                        conversa: dados.messages
                    })
                }
            })
    })
    return conversasContatos
}


//fazendo
const getPalavraChave=function(usuario, contato, palavra){
    let usu=String(usuario).toUpperCase()
    let cont=String(contato).toUpperCase()
    let pesquisa=String(palavra).toUpperCase()
    pesquisaPalavras=[]

    whatsUser.contatos.whatsUsers.forEach(function(dado){
        dado.contacts.forEach(function(dado2){
                dado2.messages.forEach(function(palavras){
                    if(String(dado.number).toUpperCase()==usu&&String(dado2.contacts).toUpperCase()==cont&&String(palavras.messages).toUpperCase()==pesquisa){
                        pesquisaPalavras.push({
                            conta: dado.account,
                            nome: dado2.name,
                            conversa: palavras.messages

                        })
                    }
                })
        })
    })
    return getPalavraChave
}

//console.log(getDadosPessoais('11987876567'))
//console.log(getDadosConta('11987876567'))
//console.log(getDadosContato('11987876567', 'Julia Smith'))
//console.log(getConversas('11987876567'))
//console.log(getConversasComUsuario('11987876567', 'Julia Smith'))
console.log(getPalavraChave('11987876567', 'Julia Smith', 'está'))


module.exports={
    getDadosPessoais,
    getDadosConta,
    getDadosContato,
    getConversas
}