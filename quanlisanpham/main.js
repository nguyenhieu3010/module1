let store = new ProductManager();
function showAll(){
    let arr = store.findAll();
            suDung(arr)
}

function showFormUpdete(id){
            let oldProduct= store.findProductByid(id)
    console.log(oldProduct)
    document.getElementById('main').innerHTML =`
        <h2>form update</h2>
         <input type="number" id="id" placeholder="ID" value="${oldProduct.id}">
        <br>
            <input type="text" id="name" placeholder="NAME" value="${oldProduct.name}">
        <br>
            <input type="text" id="price" placeholder="PRICE" value="${oldProduct.price}">
        <br>
            <input type="text" id="image" placeholder="IMAGE" value="${oldProduct.image}">
            <br>
            <img src="${oldProduct.image}" alt="">
       <br>
        <button onclick="update()">update</button>
`
}
function update(){
    let id = +document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let image = document.getElementById('image').value;
    let newProduct = new Product(id,name,price,image)
    store.update(id,newProduct)
    alert('sửa thành công')
    showAll()
}
function remove(id){
    let isConfirm= confirm("anh chắc không")
    if(isConfirm){
        store.remove(id);
        alert("xoá thành công");
        showAll()
    }

}


showAll()
function showFormAdd(){
document.getElementById('main').innerHTML =`
        <h2>form add</h2>
         <input type="number" id="id" placeholder="ID">
        <br>
            <input type="text" id="name" placeholder="NAME">
        <br>
            <input type="text" id="price" placeholder="PRICE">
        <br>
            <input type="text" id="image" placeholder="IMAGE">
       <br>
        <button onclick="add()">add</button>
`
}
function add(){
    let id = +document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let image = document.getElementById('image').value;
    let newProduct = new Product(id,name,price,image)
    store.add(newProduct)
    alert("thành công" )
    showAll()
}
function suDung(arr){
    let html =
        `
        <h2>Trang chủ</h2>
        <table class="hat1" border="1">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th colspan="2">Action</th>
        </tr>
       `
    for (let i= 0;i< arr.length;i++){
        html +=`
             <tr>
            <td>${arr[i].id}</td>
            <td>${arr[i].name}</td>
            <td>${arr[i].price}</td>
            <td><img src="${arr[i].image}" alt=""></td>
            <td><button onclick="showFormUpdete(${arr[i].id})" >sửa</button></td>
            <td><button onclick="remove(${arr[i].id})" >xoá</button></td>
        </tr>
            `

    }
    html+=`</table> `
    document.getElementById("main").innerHTML = html;
}
function searchProduct(){
    let dulieu = document.getElementById('search').value

    let pr = store.searchProduct(dulieu);
    suDung(pr)

}