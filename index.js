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
// chia nho thanh 25 chuoi item
// viet function nhan vao chuoiNguon, pre, post -> body
