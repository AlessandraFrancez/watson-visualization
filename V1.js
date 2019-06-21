let arquivo = require('C:\\Users\\User\\Downloads\\skill-ADCC---Accenture.json')
const dialogos = arquivo.dialog_nodes
let fluxo = []
// console.log(arquivo.entities[0].values[0].synonyms)
// console.log(arquivo.dialog_nodes)

// let getInfo = function (node) {
//     for (item in dialogos) {
//         console.log(item)
//         if (item.dialog_node === node) {
//             console.log (`${item.title}  ${item.conditions}`)
//             return item
//         }
//     }
// }

let gerarGraph = function (node, text, condition, conditionID, nextNode, nextNodeText)  {
    return `${node}[${text}] --> ${conditionID}{${condition}}
    ${conditionID} --> ${nextNode}[${nextNodeText}]`
} 

for (let item of dialogos) {
    // console.log (`  id: ${item.dialog_node} 
    // title: ${item.title} 
    // parent: ${item.parent} 
    // conditions: ${item.conditions}
    // `)

    // Pais
    // if (!item.hasOwnProperty("conditions")) {

    //     console.log (`      id: ${item.dialog_node} 
    //     title: ${item.title} 
    //     conditions: ${item.conditions}
    //     text: ${item.output}
    //     `)
    // }
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
        console.log(fluxo)
        let total = ''
        for (let i = 0; i < fluxo.length; i++) {
            console.log(`node: ${fluxo[i]}`)
            let node1 = getInfo(fluxo[i])
            //console.log(title)
            if (i+1 < fluxo.length) {
            let node2 = getInfo(fluxo[i+1])
            total = total + gerarGraph(fluxo[i], node1.title, node1.conditions, `A${Math.trunc(Math.random()*100)}`, fluxo[i+1], node2.title )
            } else {
                console.log("Nem chamo")
            }
        }
        console.log(total)
        fluxo = []
        throw ''
    }

}


//Teste gerarGraph
//console.log(gerarGraph("A","Texto", "Condição","B","NodoB","NodoBB"))

// for (let x in arquivo.entities) {
//     console.log(x[i].entity)
//     i++
// }
// console.log(arquivo.intents)