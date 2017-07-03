"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by maxim-mac on 02/07/2017.
 */
var Address_1 = require("./Address");
var Customer = (function () {
    function Customer() {
        this._name = "";
        this._customerName = "";
        this.addressobj = new Address_1.Address();
    }
    Object.defineProperty(Customer.prototype, "CustomerName", {
        get: function () {
            return this._customerName;
        },
        set: function (value) {
            if (value.length == 0) {
                throw "Customer Name is required";
            }
            this._customerName = value;
        },
        enumerable: true,
        configurable: true
    });
    Customer.prototype.Add = function () {
    };
    Customer.prototype.Validate = function () {
        alert("test");
    };
    return Customer;
}());
exports.Customer = Customer;
var SomeOtherCustomer = (function (_super) {
    __extends(SomeOtherCustomer, _super);
    function SomeOtherCustomer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SomeOtherCustomer.prototype.Validate = function () {
        this._name;
        alert("this is a new customer");
    };
    return SomeOtherCustomer;
}(Customer));
