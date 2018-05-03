const { source } = require('./data');

function getBody(source, pre, post) {
    const startIndex = source.lastIndexOf(pre) + pre.length;
    const endIndex = source.lastIndexOf(post);
    return source.substring(startIndex, endIndex).trim();
}
class Tin {
    constructor(id, title, description, link, image) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}

const items = source.split('<item>');
items.shift();

const arrTin = items.map(item => {
    const title = getBody(item, '<title>', '</title>');
    const link = getBody(item, '<link>', '</link>');
    const description = getBody(item, '</a></br>', ']]>');
    const image = getBody(item, 'src="', '></a>');
    const id = getBody(link, '-', '.');
    return new Tin(id, title, description, link, image);
});

console.log(arrTin);
