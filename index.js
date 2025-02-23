const serv = document.getElementById('menuUlServicios')

const li = serv.querySelectorAll('li')

console.log(li)
li.forEach(element => {
    element.addEventListener("click", () => {
        li.forEach(item => item.classList.remove("active"));
        element.classList.add("active");
        switch (element.id) {
            case 'consB':
                document.getElementById('consultorias').classList.add('active-cards')
                document.getElementById('protocolos').classList.remove('active-cards')
                document.getElementById('gestionAmb').classList.remove('active-cards')
                document.getElementById('capacitaciones').classList.remove('active-cards')
                break;

            case 'protB':
                document.getElementById('protocolos').classList.add('active-cards')
                document.getElementById('consultorias').classList.remove('active-cards')
                document.getElementById('gestionAmb').classList.remove('active-cards')
                document.getElementById('capacitaciones').classList.remove('active-cards')
                break;

            case 'gestB':
                document.getElementById('gestionAmb').classList.add('active-cards')
                document.getElementById('consultorias').classList.remove('active-cards')
                document.getElementById('protocolos').classList.remove('active-cards')
                document.getElementById('capacitaciones').classList.remove('active-cards')
                break;

            case 'capB':
                document.getElementById('capacitaciones').classList.add('active-cards')
                document.getElementById('consultorias').classList.remove('active-cards')
                document.getElementById('gestionAmb').classList.remove('active-cards')
                document.getElementById('protocolos').classList.remove('active-cards')
                break;

        }
    })

});

const ulMenuRep = document.getElementById('ulREP')

const liRep = ulMenuRep.querySelectorAll('li')

liRep.forEach(element => {
    element.addEventListener("click", () => {
        document.getElementById('ulREP').classList.add('sacarMenuRep')
    })
});

document.getElementById('checkMenRep').addEventListener("click", ()=> {
    document.getElementById('ulREP').classList.remove('sacarMenuRep')

})
