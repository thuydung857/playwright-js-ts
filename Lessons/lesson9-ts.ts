console.log('Hello Node JS');

let a: string = '10'
let b: number = 1
let c: number = Number(a) + b

console.log(c);

//any
let userName: any = 'Nguyen van a'
userName = 123

//void
function printReceipt(orderId: number): void {
    console.log(`in hoa don ${orderId}`);
}

printReceipt(123)

function tinhTong(a: number, b: number): number {
    return a + b
}
const result = tinhTong(3, 5)
console.log(result);


//array
//kieu_du_lieu[]
let menu: string[] = ['latte , cappuchino']


//object
//dang cho object
let coffeeOrder: {
    orderId: number;
    customerName: string;
    isPaid: boolean;
    itemCount: number
}

coffeeOrder = {
    orderId: 101,
    customerName: 'Dung',
    isPaid: true,
    itemCount: 4
}

console.log(`coffeeOrder : ${coffeeOrder}`); ///??????
console.log('coffe', coffeeOrder);

let specialOrder: {
    orderId: number;
    items: string[];
    note?: string
    //dien dau ? khi ma object optional
}

specialOrder = {
    orderId: 12345,
    items: ['matcha'],
    //thi khong can khai bao , thieu cung dc
}

// const customerOrdera: {
//     orderId: number;
//     status: string
// } = {
//     orderId: 136,
//     status: 'new'
// }

const storeMenu: {
    readonly id: number;
    name: string;
    price: number
}[] = [
        { id: 1, name: 'Caphe', price: 25000 },
        { id: 2, name: 'matcha', price: 35000 },
        { id: 3, name: 'socola', price: 45000 },
    ]

const customrOrder: {
    orderId: number;
    customerName: string;
    items: { name: string, price: number }[];
    status: string;
    note?: string
} = {
    orderId: 20250909,
    customerName: 'Teo',
    items: [],
    status: 'pending',
    note: 'it da'

}

function calculateOrderTotal(order: { items: { price: number }[] }): number {
    let total = 0
    for (const item of order.items) {
        total += item.price
    }
    return total
}

function processPayment(totalAnnount: number, method: string, amountGiven: number): string {
    if (method === ' card') {
        return `Thanh toan thanh cong ${totalAnnount}`
    } else if (method === 'cash') {
        const change = amountGiven - totalAnnount
        if (change < 0) {
            return `Khach dua thieu ${Math.abs(change)}`

        }
        return `Thanh toan thanh cong voi so tien ${change}`
    }
    return `Phuong thuc thanh toan khong hop le`
}

customrOrder.items.push({ name: storeMenu[1]!.name, price: storeMenu[2]!.price })
const totalAnnount = calculateOrderTotal(customrOrder)
console.log(totalAnnount);


const paymentResult = processPayment(totalAnnount , 'card', 10000)
console.log(paymentResult);