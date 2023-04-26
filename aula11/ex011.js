function verificar(){
    // Selecionar o input
    var txtp = window.document.querySelector('#txtpais')
    // Selecionar o div
    var res = window.document.querySelector('#res')
    var pais = 'Brasil'
    
    // Mostrar o valor do input
    // console.log(txtp.value);
    
    res.innerHTML += `<p>Voce reside em <strong>${txtp.value}</strong></p>`
    if (txtp.value === pais) { 
        res.innerHTML += `<p>Voce é <strong>Brasileiro</strong>.</p>`
    }
    else {
        res.innerHTML += `<p>Voce é <strong>Estrangeiro</strong>.</p>`
    }
}