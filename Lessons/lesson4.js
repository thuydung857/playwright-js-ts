//switch case....
// switch (bien_can_kiem tra){
//     case giaTri1:
//         //code thuc thi
//         break;
//     case gia tri2:
//         //code thuc thi
//        break; 
        
//     default:
//         code thuc thi khi kong co case nao khop   
// }

//thuong se su dung de kiem ra bien duy nhat voi nhieu gia tri kha thi
// 
const enviroment = 'dev'

let baseUrl;
let userName;
let password;

switch(enviroment){
    case 'dev':
        baseUrl = 'dev.example.com'
        userName = 'dev-user'
        password = 'dev-pass'
    case 'staging':
        baseUrl = 'stg.example.com'
        userName = 'stg-user'
        password = 'stg-pass'
    default:
        console.log('Loi moi truong ko tim thay');
        
}

console.log(`cau hinh duoc thiet lap voi URL: ${baseUrl}, ${userName}, ${password}`);





const userRole = 'mode'

let canDeletePost2;
if(userRole === 'admin' || userRole === 'mode'){
    canDeletePost2 = true
}else{
    canDeletePost2 = false
}
console.log(canDeletePost2);




let giaGame = 1000000
let soTienTietKiem = 0
let soTuan = 0

while(soTienTietKiem < giaGame){
    console.log(`Tuan ${soTuan + 1}. Dang co ${soTienTietKiem}`);
    soTienTietKiem += 150000 // soTienTietKiem = soTienTietKiem + 15000
    soTuan++
    console.log('Bo vao tiet kiem 150k');
        
}

console.log(`Sau ${soTuan} thi da tiet kiem duoc ${soTienTietKiem} va du de mua game`);



