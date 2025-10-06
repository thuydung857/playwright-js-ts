//generic o trong TS, nang cao trong TS

function traVeSo(arg: number): number {
    return arg
}

function traVeChuoi(arg: string): string {
    return arg
}

// mat nhieu thoi gian de viet nhieu function, nen se viet nhu sau:

function traVeGiaTriBatKy(arg: any): any {
    return arg
}

let output = traVeGiaTriBatKy('xin chao')
// output.toFixed(output)

//Generic Type => 1 chai nuoc rong ko quy dinh chua nuoc gi, chi la 1 cai khuon mau
//Trong ts cai chai nhu vay dc ki hieu boi dau ngoac nhon <T> (U,V)

function traVeGiaTriDynamic<T>(arg: T): T {
    return arg
}

//Do chai nuoc khoang -> string vao chai
let outputString = traVeGiaTriDynamic<string>('Chao moi nguoi')
console.log(outputString.toUpperCase())

//Do chai nuoc cam -> number vao chai
let outputNumber = traVeGiaTriDynamic<number>(123)
console.log(outputNumber.toFixed(2));

//T -> placeholder 
//syntax
//trong function
// function tenHam<T, U...>(thamSo1: T, thamSo2: U, ...): KieuTraVe {
//     than ham
// }

function taoCapGiaTri<T, U>(key: T, value: U): { key: T, value: U } {
    return { key: key, value: value }
}

let vd1 = taoCapGiaTri<string, number>('Tuoi', 20)
console.log(vd1.key.toLocaleUpperCase());



interface Result<TData> {
    isSuccess: boolean;
    error?: string;
    data: TData
}
let userResult: Result<string> = {
    isSuccess: true,
    data: 'Lay du lieu thanh cong'
}

let productResult: Result<{ id: number, name: string }> = {
    isSuccess: false,
    data: { id: 1, name: 'laptop' }
}


//generic trong Class
// class TenLop<T> {
//     constructor(value: T) {
//         method(value : T) : T
//     }
// }


class DataStorage<T> {
    private data: T

    constructor(initialData: T) {
        this.data = initialData
    }

    getData(): T {
        return this.data
    }
}


const stringStorage = new DataStorage<string>('Hello')
console.log(stringStorage.getData().toLocaleUpperCase());