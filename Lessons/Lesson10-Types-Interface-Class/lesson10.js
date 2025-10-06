let product = {
    id: 'abc-124',
    name: 'Laptop',
    price: 1500,
    tags: ['electronic'],
    calculateTax(rate) {
        return this.price * rate; //khong nen xai nhu vay
    }
};
const tax = product.calculateTax(2);
console.log('tax', tax);
const product2 = {
    id: 'abc-124',
    name: 'Laptop',
    price: 1500,
    tags: ['electronic'],
    calculateTax(rate) {
        return this.price * rate;
    }
};
console.log(product2.calculateTax(3));
let currentStatus = 'Pending'; //phai dung gia tri trong type define , neu sai se bao loi
console.log(currentStatus);
const newCustomer = {
    id: 101,
    name: 'an',
    email: 'an123@gmail.com',
    phone: '123'
};
const myCar = {
    model: 'Vinfast',
    year: 2025,
    start: () => console.log('started car')
};
myCar.start();
const Routine = {
    model: 'Vin',
    year: 2022,
    start: () => console.log('started road'),
    end: 123,
    way: {
        road: "CMT8"
    }
};
const tuyenDuongChinh = ["GL01", "GL03"];
const duLieuGiaoThong = [
    { id: "GL01", luongXe: "cao", coNguoiDiBoCho: true, coXeCuuThuong: false, camBienPhu: { ghiChu: "Cảm biến A cần hiệu chỉnh." } },
    { id: "GL02", luongXe: "trung binh", coNguoiDiBoCho: false, coXeCuuThuong: true, camBienPhu: {} },
    { id: "GL03", luongXe: "thap", coNguoiDiBoCho: true, coXeCuuThuong: false, camBienPhu: {} },
    { id: "GL04", luongXe: "cao", coNguoiDiBoCho: false, coXeCuuThuong: false, camBienPhu: { ghiChu: "Hoạt động ổn định." } }
];
// const lenhDieuKhien: ILenhDieuKhien[] = duLieuGiaoThong.map((giaoLo: IGiaoLo): ILenhDieuKhien => {
// })
//Xai faker de tao data gia
import { faker } from '@faker-js/faker';
const newCustom = {
    name: `${faker.person.fullName()}`,
    email: `${faker.internet.email()}`
};
console.log(newCustom);
class User {
    id;
    name;
    email;
    role;
    isActive;
    constructor(name, email, role, isActive) {
        this.email = email;
        this.name = name;
        this.id = faker.string.uuid();
        this.role = role;
        this.isActive = isActive;
    }
    getFullName() {
        return this.name.trim();
    }
    generateMessage(template) {
        const cleanName = this.getFullName();
        return template.replace('{{NAME}}', cleanName);
    }
}
function createRandomUser() {
    return new User(`${faker.person.fullName()}`, faker.internet.email(), faker.helpers.arrayElement(['Admin', 'Member', 'Guest']), faker.datatype.boolean());
}
function processUserForMarketing(user) {
    const emailTemplate = 'Xin chao {{NAME}} , cam on ban la thanh vien tich cuc';
    const marketingList = user.filter(user => user.role === 'Member' && user.isActive)
        .map(user => {
        return {
            fullName: user.getFullName(),
            email: user.email,
            personalBody: user.generateMessage(emailTemplate)
        };
    });
    return marketingList;
}
function main() {
    const rawUser = Array.from({ length: 10 }, createRandomUser);
    const cleanMarketList = processUserForMarketing(rawUser);
    cleanMarketList.forEach(contact => {
        console.log(`Da gui toi. ${contact.email} | noi dung ${contact.personalBody} | name ${contact.fullName}`);
    });
}
main();
//# sourceMappingURL=lesson10.js.map