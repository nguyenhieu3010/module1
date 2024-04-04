class ProductManager {
    list;

    constructor() {
        this.list = [];
    }
    findAll() {
        return this .list
    }
    add(newProduct){
            this.list.push(newProduct);
    }
    remove(id){
        let index = this.findIndexByid(id)
        this.list.splice(index,1)
    }
    findIndexByid(id){
        for (let i = 0; i < this.list.length ; i++) {
            if (id=== this.list[i].id){
                return i
            }
        }
        return -1
    }
    findProductByid(id){
        let index= this.findIndexByid(id)
        let product= this.list[index]
        return product ;
    }
    update(id,newProduct){
        let index = this.findIndexByid(id)
        this.list[index]= newProduct
    }
    searchProduct(name){
        let search=[]
        for (let i=0;i<this.list.length;i++){
            if(this.list[i].name.includes(name)){
                search.push(this.list[i])
            }

        }
            return search
    }




}

