const arquivo = require('C:\\Users\\User\\Downloads\\skill-ADCC---Accenture.json')
const dialogos = arquivo.dialog_nodes
let fluxo = []

//window.open('C:\\Users\\User\\Desktop\\Watson visualization\\test.html')
// Cria string no formato mermaid
//console.log(gerarGraph("nodo","Texto", "Condição","B",))
let gerarGraph = function (node, text, condition, conditionID, parent = "first")  {
    return `${parent}{"${condition}"} --> ${conditionID}(<p>${text}</p>)
    `
    //${conditionID}{${condition}}`
    return `${node}[${text}] --> ${conditionID}{${condition}}
    ${conditionID} --> ${nextNode}[${nextNodeText}]
    `
}


let gerarTitle = function (title) {

    return `graph TD
title["<b>${title}</b>"]
title-->first
style title fill:#FFF,stroke:#FFF
linkStyle 0 stroke:#FFF,stroke-width:0;
` 
}

//console.log(gerarTitle("texto") + gerarGraph("nodo","Texto", "Condição","B",))

// ILOVEYOUBAE <3

//Título
// title[<b>My Title</b>]
// title-->node_2_1551391813552
// style title fill:#FFF,stroke:#FFF
// linkStyle 0 stroke:#FFF,stroke-width:0;

for (let item of dialogos) {

    // Pais
    if (!item.hasOwnProperty("parent")) {
        console.log (`id: ${item.dialog_node} 
        title: ${item.title} 
        conditions: ${item.conditions}
        `)
        fluxo.push(item)
        for (let subitem of dialogos) {
            if (subitem.parent === item.dialog_node) {
                fluxo.push(subitem)
                console.log (`Filhos:
    id: ${subitem.dialog_node} 
    title: ${subitem.title} 
    parent: ${subitem.parent} 
    conditions: ${subitem.conditions}
    `)      
            }
        }
        let total = gerarTitle(fluxo[0].title)
        for (let i = 0; i < fluxo.length; i++) {
            console.log(`node: ${fluxo[i].dialog_node}`)
            if (i+1 < fluxo.length) {
                total = total + gerarGraph(fluxo[i].dialog_node, fluxo[i].title,fluxo[i].condition,)
            total = total + gerarGraph(fluxo[i].dialog_node, fluxo[i].title, fluxo[i].conditions, 
                `A${Math.trunc(Math.random()*100)}`, fluxo[i+1].dialog_node, fluxo[i+1].title )
            } else {
                console.log("Nem chamo")
            }
        }
        console.log(total)
        fluxo = []
        throw ''
    }

}



