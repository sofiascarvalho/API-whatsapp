/********************************************************
* objetivo: criar API para fornecer dados para o Front
* data: 04/02/2025
* autor: sofia
* versão: 1.0
*********************************************************/

const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const { get } = require('http')

const app=express()

app.use((request, response, next)=>{
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET')
    app.use(cors())
    next()
})

const contatos=require('./modulo/funcoesW.js')

app.get('/v1/whatsapp/lista-dados-pessoais', cors(), async function (request, response) {
    let listaPessoais=contatos.getDadosPessoais()
    if(listaPessoais){
        response.status(200)
        response.json(listaPessoais)
    }else{
        response.status(404)
        response.json({'status':404, 'message': 'não foram encontrados dados para retornar'})
    }
})

app.get('/v1/whatsapp/')
















app.listen('8080', function(){
    console.log('API funcionando e aguardando requisições...')
})