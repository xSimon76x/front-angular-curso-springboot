export class Product {
    id: number = 0;//se puede definir un valor por defecto para no tener el error de inicializacion
    name!: string;//o se puede usar el simbolo !, indicando que despues se le dara el valor
    description: string = '';
    price: number = 0;
}