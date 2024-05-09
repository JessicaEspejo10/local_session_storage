
var items = localStorage.getItem('ListObject')
items = items ? JSON.parse(items) : []
showItems()

function addItem(){
    let nombreProducto = document.getElementById('nombreProducto').value
    let costo = document.getElementById('costo').value
    let descripcion = document.getElementById('descripcion').value

    if(nombreProducto && costo) {
        items.push({
                    'nombreProducto': nombreProducto, 
                    'costo': costo,
                    'descripcion': descripcion
                    })
        showItems()
    }
}

function showItems(){
    document.getElementById('nombreProducto').value = ''
    document.getElementById('costo').value = ''
    document.getElementById('descripcion').value = ''
    document.getElementById('nombreProducto').focus()

    let html = ''
    
    items.forEach((data, indice) => {
        html += `<div class="row border border-warning mt-2 mb-2 ms-2 me-2">`
        html += `<div class="col-4"> ${data.nombreProducto} </div>`
        html += `<div class="col-2"> ${data.costo} </div>`
        html += `<div class="col-4"> ${data.descripcion} </div>`
        html += `<div class="col-2 mt-2 mb-2"> 
                    <a href="#" class="btn btn-danger" onclick=deleteItem(${indice})> X </a> 
                </div>`
        html += `</div>`
    });
/*
    items.forEach(element => {
        console.log(element.nombreProducto)
    });

    for(const element of items) {
        console.log(element.nombreProducto)
    };
*/
    localStorage.setItem('ListObject', JSON.stringify(items))
    document.getElementById('items-list').innerHTML = html
}

function deleteItem(indice) {
    items.splice(indice,1)
    showItems()
}