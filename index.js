const { source } = require('./data');

class Tin {
    constructor(id, title, description, link, image) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}

const arrTin = [];

const items = source.split('<item>');
items.shift();
console.log(items);
