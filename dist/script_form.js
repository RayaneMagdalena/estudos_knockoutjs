"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ko = __importStar(require("knockout"));
var ViewModel = /** @class */ (function () {
    function ViewModel() {
        var _this = this;
        this.incluirItem = function () {
            if (_this.descricaoItem() === '') {
                _this.mostrarAlerta('Preencha o campo', 'warning');
            }
            else {
                _this.lista.push({ descricao: ko.observable(_this.descricaoItem()), checado: ko.observable(false) });
                _this.mostrarAlerta('Item incluído', 'info');
                _this.descricaoItem('');
            }
        };
        this.mostrarAlerta = function (mensagem, tipo) {
            _this.alerta({ mostrar: true, mensagem: mensagem, tipo: tipo });
            setTimeout(function () {
                _this.alerta({ mostrar: false, mensagem: '', tipo: '' });
            }, 1500);
        };
        this.itemsChecados = ko.pureComputed(function () {
            return _this.lista().filter(function (item) { return item.checado(); }).length;
        });
        this.itemsNaoChecados = ko.pureComputed(function () {
            return _this.lista().filter(function (item) { return !item.checado(); }).length;
        });
        this.lista = ko.observableArray([]);
        this.descricaoItem = ko.observable("");
        this.alerta = ko.observable({ mostrar: false, mensagem: 'concluido', tipo: 'danger' });
    }
    return ViewModel;
}());
ko.applyBindings(new ViewModel());
