/**
 * Created by maxim-mac on 02/07/2017.
 */
import {Address} from "./Address";

interface  IDal {
    Add();

}

export class Customer implements IDal{
    protected _name:string = "";
    private _customerName  : string = "";
    public addressobj: Address = new Address();
    public set CustomerName(value: string){
        if(value.length == 0){
            throw "Customer Name is required";
        }
        this._customerName = value;
    }
    public get CustomerName() : string{
        return this._customerName;
    }
    Add(){
    }
    Validate() {
        alert("test")
    }
}

class SomeOtherCustomer extends Customer {
    Validate() {
        this._name
        alert("this is a new customer");
    }
}