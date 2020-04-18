class MySet {
    constructor(input) {
        this.collection = [];

        input.forEach((el) => {
            this.add(el);
        });
    }

    get size() {
        return this.collection.length;
    }

    get [Symbol.toStringTag]() {
        return "MySet";
    }

    [Symbol.iterator]() {
        return this.collection.values();
    }

    entries() {
        return this.collection.map((el) => [el, el]);
    }

    keys() {
        return this.collection;
    }

    values() {
        return this.collection;
    }

    clear() {
        this.collection = [];
    }

    add(item) {
        if (!this.collection.includes(item)) this.collection.push(item);
    }

    delete(item) {
        if (this.collection.includes(item))
            this.collection = this.collection.filter((el) => el !== item);
    }

    has(item) {
        return this.collection.includes(item);
    }

    forEach(callback, thisArg) {
        this.collection.forEach((el) => callback.call(thisArg, el));
    }
}

// тесты
const set = new MySet([4, 8, 15, 15, 16, 23, 42]);

// хранит только уникальные значения
console.log([...set]); // [ 4, 8, 15, 16, 23, 42 ]

// есть свойство size
console.log(set.size); // 6

// работает в цикле for-of
for (const item of set) {
    console.log(item); // 4 8 15 16 23 42
}

// есть методы keys, values, entries
for (const item of set.entries()) {
    console.log(item); // [ 4, 4 ] [ 8, 8 ] ...
}

// есть метод clear
set.clear();
console.log(set.size); // 0

const object = {
    getValue() {
        return this.value;
    },
};

const data = {
    value: 42,
};

// есть метод add
set.add(object);
set.add(data);
console.log([...set]);

// есть метод delete
set.delete(data);
console.log([...set]);

// есть метод has
console.log(set.has({})); // false
console.log(set.has(object)); // true
console.log(set.has(data)); // false

// и кое-что еще
console.log(set === set.valueOf()); // true
console.log(String(set)); // [object MySet]
console.log(Object.prototype.toString.call(set)); // [object MySet]

// задание со звездочкой *
// есть forEach, который делает какие-то странные вещи...
set.forEach(function (item) {
    console.log(item.getValue.call(this)); // 42
}, data);
