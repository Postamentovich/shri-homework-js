/**
 * Функция возвращает все свойства и символы как в самом объекте, так и во всей его цепочке прототипов.
 *
 * @param {Object} object
 */
function allKeysAndSymbols(object) {
    let result = [];

    const getProperties = (obj) => {
        const keys = Object.getOwnPropertyNames(obj);
        const symbols = Object.getOwnPropertySymbols(obj);
        result = [...result, ...keys, ...symbols];
        const proto = Object.getPrototypeOf(obj);
        if (proto) getProperties(proto);
    };

    getProperties(object);

    return result;
}

const simpleObject = allKeysAndSymbols({ test: "test", simple: "simple" });
console.log("Простой объекта", simpleObject);

const s1 = Symbol("test");
const objectWithSymbol = allKeysAndSymbols({ [s1]: "symbol" });
console.log("Объект с символом", objectWithSymbol);

class Fruit {
    constructor() {
        this.color = "green";
    }
}

class Apple extends Fruit {
    eat() {}
}

const apple = new Apple();

const objectWithExtends = allKeysAndSymbols(apple);

console.log("Объект с наследованием", objectWithExtends);
