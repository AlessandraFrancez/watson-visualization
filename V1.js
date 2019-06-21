const arquivo = require('C:\\Users\\User\\Downloads\\skill-ADCC---Accenture.json')
const dialogos = arquivo.dialog_nodes
let fluxo = []

// Cria string no formato mermaid
//console.log(gerarGraph("A","Texto", "Condição","B","NodoB","NodoBB"))
let gerarGraph = function (node, text, condition, conditionID, nextNode, nextNodeText)  {
    return `${node}[${text}] --> ${conditionID}{${condition}}
    ${conditionID} --> ${nextNode}[${nextNodeText}]
    `
} 

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
        let total = ''
        for (let i = 0; i < fluxo.length; i++) {
            console.log(`node: ${fluxo[i].dialog_node}`)
            if (i+1 < fluxo.length) {
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



