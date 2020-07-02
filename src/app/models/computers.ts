export class Computers {

    id: number;
    model: string;
    brand: string;
    type: string;
    category: string;
    buyingPrice: number;
    sellingPrice: number;
    dateEntryStock: Date;

    constructor(id : number = null, model : string = null, brand : string = null, type : string = null, category : string = null, buyingPrice : number = null, sellingPrice : number = null, dateEntryStock : Date = new Date()){
        this.id = id;
        this.model = model;
        this.brand = brand;
        this.type = type;
        this.category = category;
        this.buyingPrice = buyingPrice;
        this.sellingPrice = sellingPrice;
        this.dateEntryStock = dateEntryStock;
    }
}
