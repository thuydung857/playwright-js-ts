let product: {
    id: string;
    name: string;
    price: number;
    tags?: string[];
    calculateTax(rate: number): number;

} = {
    id: 'abc-124',
    name: 'Laptop',
    price: 1500,
    tags: ['electronic'],
    calculateTax(rate: number) {
        return this.price * rate //khong nen xai nhu vay
    }
}

const tax = product.calculateTax(2)
console.log('tax', tax);



//type alias - type : tu define type luon, duoc dung rat nhieu
type Product = {
    id: string;
    name: string;
    price: number;
    tags?: string[];
    calculateTax(rate: number): number;
}
const product2: Product = {
    id: 'abc-124',
    name: 'Laptop',
    price: 1500,
    tags: ['electronic'],
    calculateTax(rate: number) {
        return this.price * rate
    }
}

console.log(product2.calculateTax(3));


//type alias ung dung nhu sau
//union types
type OrderStatus = 'Pending' | 'Processing' | 'Delivered'
let currentStatus: OrderStatus = 'Pending' //phai dung gia tri trong type define , neu sai se bao loi

console.log(currentStatus);

//kieu giao (tong hop nhieu kieu type khac nhau)
type BasicInfo = {
    id: number;
    name: string
}
type ContactInfo = {
    email: string;
    phone: string
}
type CustomerInfo = BasicInfo & ContactInfo
const newCustomer: CustomerInfo = {
    id: 101,
    name: 'an',
    email: 'an123@gmail.com',
    phone: '123'
}




//Interface: no co kieu ke thua (extends)
// co the extends rat nhieu interface (...extends IA, IB, IC)
interface IVerhicle {
    model: string;
    year: number;
    start(): void
}

const myCar: IVerhicle = {
    model: 'Vinfast',
    year: 2025,
    start: () => console.log('started car')
}

myCar.start()


type Road = {
    road: string
}

interface IRoad extends IVerhicle {
    way: Road;
    end: number
}

const Routine: IRoad = {
    model: 'Vin',
    year: 2022,
    start: () => console.log('started road'),
    end: 123,
    way: {
        road: "CMT8"
    }
}


//Example: Giai btvn
type thoiDiem = 'gio cao diem' | 'binh thuong' | 'ban dem'
type mucDoCanhBaoThoiTiet = 'binh thuong' | 'xau' | 'nguy hiem'
type luongXe = 'cao' | 'trung binh' | 'thap'

interface IGlobalConfig {
    thoidiem: thoiDiem,
    coSuKienDacBiet: boolean,
    mucDoCanhBaoThoiTiet: mucDoCanhBaoThoiTiet

}

interface ICamBienPhu {
    ghiChu?: string
}

interface IGiaoLo {
    id: string;
    luongXe: luongXe;
    coNguoiDiBoCho: boolean;
    coXeCuuThuong: boolean;
    camBienPhu: ICamBienPhu
}

interface ILenhDieuKhien {
    giaoLoId: string;
    hanhDong: string;
    diemUuTien: number;
    thoiGianDenCoBan: number;
    ghiChuBaoTri: string
}

const tuyenDuongChinh = ["GL01", "GL03"];

const duLieuGiaoThong: IGiaoLo[] = [
    { id: "GL01", luongXe: "cao", coNguoiDiBoCho: true, coXeCuuThuong: false, camBienPhu: { ghiChu: "Cảm biến A cần hiệu chỉnh." } },
    { id: "GL02", luongXe: "trung binh", coNguoiDiBoCho: false, coXeCuuThuong: true, camBienPhu: {} },
    { id: "GL03", luongXe: "thap", coNguoiDiBoCho: true, coXeCuuThuong: false, camBienPhu: {} },
    { id: "GL04", luongXe: "cao", coNguoiDiBoCho: false, coXeCuuThuong: false, camBienPhu: { ghiChu: "Hoạt động ổn định." } }
];


// const lenhDieuKhien: ILenhDieuKhien[] = duLieuGiaoThong.map((giaoLo: IGiaoLo): ILenhDieuKhien => {


// })

//Xai faker de tao data gia
import { faker } from '@faker-js/faker'

const newCustom = {
    name: `${faker.person.fullName()}`,
    email: `${faker.internet.email()}`
}
console.log(newCustom);



//Class
// class User implements ILenhDieuKhien {//example thoi nha 

// } 
//Coi lai bai 10 luc 2:00:00
