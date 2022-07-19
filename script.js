let tarefas = []


function adicionaTarefa()
{
    let addTarefa = document.getElementById("addTarefa").value
    if(addTarefa == "")
    {
        alert("Insira uma tarefa!")
    }
    else
    {
        tarefas.push(addTarefa)
        document.getElementById("addTarefa").value = ""
        imprimeTarefas()
    }
}


function imprimeTarefas()
{
    let sectionTarefas = document.getElementById("tarefas")
    let cacheTarefas = ""
    sectionTarefas.innerHTML = ""
    for(let i = 0; i < tarefas.length; i++)
    {
        cacheTarefas = tarefas[i]
        sectionTarefas.innerHTML += `
        <div class="imprimiTarefas">
            <p>${cacheTarefas}</p>
        </div>
        `
    }
}


let tarefasBkp
function buscar()
{
    let busca = document.getElementById("addTarefa").value
    tarefasBkp = tarefas
    tarefas = tarefas.filter((elemento) => {
        return elemento.includes(busca.toLowerCase())
    })
    document.getElementById("tarefas").innerHTML = ""
    imprimeTarefas()
}

function limpar()
{
    tarefas = tarefasBkp
    document.getElementById("tarefas").innerHTML = ""
    imprimeTarefas()
}

