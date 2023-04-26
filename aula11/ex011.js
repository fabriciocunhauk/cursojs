function verificar() {
    var pais = window.document.querySelector('input#txtpais')
    var paisres = pais.value
    var resposta = window.document.querySelector('div#res')
    res.innerHTML += `<p>Voce reside em <strong>${paisres}</strong></p>`
    if (paisres === 'Brasil') {
        resposta.innerHTML = `<p>Você é Brasilero! Digitou ${paisres}</p>`
    } else {
        resposta.innerHTML = `<p>Você é Estrangeiro!</p>`
    }
    }