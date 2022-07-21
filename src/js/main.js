(showHideForms = () => {
    const jogos = document.querySelectorAll('[data-jogo]')

    esconderConteudos = () => {
        const conteudos = document.querySelectorAll('[data-conteudo]')
        conteudos.forEach(conteudo => conteudo.classList.add('hide'))
    }

    inativarJogos = () => {
        const jogos = document.querySelectorAll('[data-jogo]')
        jogos.forEach(jogo => jogo.classList.remove('ativa'))
    }

    ativarConteudo = (valor) => {
        const conteudo = document.querySelector(`[data-conteudo="${valor}"]`)
        conteudo.classList.remove('hide')
    }

    ativarJogo = (jogo) => {
        jogo.classList.add('ativa')
    }

    jogos.forEach(jogo => jogo.addEventListener('click', () => {
        const valor = jogo.dataset.jogo

        esconderConteudos()
        inativarJogos()
        ativarConteudo(valor)
        ativarJogo(jogo)
    }))
})


(showHideValAgents = () => {
    const funcoes = document.querySelectorAll('[data-funcao]')

    esconderAgentes = () => {
        const agentes = document.querySelectorAll('[data-agente]')
        agentes.forEach(agente => agente.classList.add('hide'))
    }

    ativarAgentes = (valor) => {
        const agentes = document.querySelectorAll(`[data-agente="${valor}"]`)

        agentes.forEach(agente => agente.classList.remove('hide'))
    }
    
    funcoes.forEach(funcao => funcao.addEventListener('click', () => {
        const valor = funcao.dataset.funcao
        esconderAgentes()
        ativarAgentes(valor)
    }))
})

showHideForms()
showHideValAgents()