//parseInt()

const soLuongText = "15 30san 30 pham"
console.log(parseInt(soLuongText))

//parseFloat()

const giaTienText = '$29.99 USD'
const giaTien = giaTienText.replace('$', '')
console.log(parseFloat(giaTien));

//Number
const tongTienText = 'Tong thanh toan: 2,540,000.50 VND'

const chuoiDaLamsach = tongTienText.replace('Tong thanh toan: ', '').replace(' VND', '').replaceAll(',', "")

console.log(chuoiDaLamsach);
const chuoiNumber = Number(chuoiDaLamsach)
console.log(`Ta co chuoi: ${chuoiNumber}, ${typeof (chuoiNumber)} `);




const tonKhoText1 = 'Ton kho: 25'
const tonKhoText2 = 'Ton kho: het hang'

function kiemTraVaHanhDong(inputText) {
    console.log(`Dang xy ly chuoi ${inputText}`);

    //b2,b3: so che va ep kieu
    const chuoiSo = inputText.replace('Ton kho: ', '')
    const soLuong = parseInt(chuoiSo)

    //b4
    if (Number.isNaN(soLuong)) {
        console.log('San pham het hang, bo qua hanh dong them vao gio');

    } else {
        console.log(`so luong hang con la ${soLuong}`);
        if (soLuong > 0) {
            console.log('Thuc hien hanh dong them vao giio hang');

        }
    }

}
console.log('Kich ban1: con hang');
kiemTraVaHanhDong(tonKhoText1)

console.log('Kich ban2: het hang');
kiemTraVaHanhDong(tonKhoText2)



//Toan tu gán (Assignment Operators)
let x = 0
x += 1
console.log(x)

//Toán tử tăng/giảm (Incerment/Decrement Operators)
//++x và x++

//đối với x++ -> trả về giá trị cũ, rồi mới tăng
//làm 2 việc: 1-lấy giá trị hiện tại và trả về giá trị đó, 2-tăng giá trị x
let a = 10
a++
console.log(a)

//đối với ++x -> tăng lên 1 liền , rồi trả về giá trị 
//làm 2 việc : 1-tăng giá trị x lên 1 ngay lập tức, rồi trả về giá trị đó
let b = 10
++b
console.log(b)

//Applied
let attemts = 0
const MAX_ATTEMPTS = 3;

function perfromClickWithRetry() {
    attemts++
    console.log(`Bat dau thu hien click, lan thu: ${attemts}`)


    log

    const isSuccess = false;

    if (!isSuccess) {
        if (attemts >= MAX_ATTEMPTS) {
            console.error(`Da thu ${attemts} va van that bau. Dung lai`)
        } else {
            console.log(`-> click that bai, so lan da thu ${attemts}`);

        }
    }


}

//Toán tử so sánh
//= là gán giá trị , ko phải so sánh
//== la so sánh giá trị
//=== là so sánh giá trị + kiểu dữ liệu