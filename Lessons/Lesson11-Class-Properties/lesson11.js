//Cac thuoc tinh trong Class
// readonly, private, protected
class Aminal {
    name; //readonly
    age; //private
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // changeName(newName: string) {
    //     this.name = newName    // readonly nen ko duoc thay doi gia tri
    // }
    printName() {
        return this.name;
    }
}
const dog = new Aminal('Buddy', 2);
console.log(dog.name);
console.log(dog.printName());
// console.log(dog.age);   //vi la private nen khong truy cap dc
//protected
class GameCharacter {
    health;
    constructor(health) {
        this.health = health;
    }
    takeDamage(amount) {
        this.health -= amount;
        console.log(`Bi mat ${amount} damage , con lai ${this.health}`);
    }
}
class Warrior extends GameCharacter {
    attack(target) {
        console.log('Warrior attack!');
        // target.takeDamage(10)    //khong truy cap duoc vi ka protected, phai thong qua this.
    }
    defendAndAttack() {
        console.log('warrior attacks with a special move');
        this.takeDamage(5); //su dung nhu vay moi co the truy cap dc protected
    }
}
const warrior = new Warrior(100);
warrior.defendAndAttack();
const userWithData = {
    name: 'Binh',
    orders: [{ id: 101, total: 100 }]
};
const userWithoutData = {
    name: 'An'
};
//cach1
function getFirstOrderId(user) {
    if (user.orders && user.orders.length > 0) {
        return user.orders[0]?.id;
    }
    return undefined;
}
const idBinh = getFirstOrderId(userWithData);
console.log(idBinh);
const idAn = getFirstOrderId(userWithoutData);
console.log(idAn);
//cach2 goi la optional chaining ...
const idBinh2 = userWithData.orders?.[0]?.id; //syntax trong TS cho phep co the undefine, va se tra luon la undefine va ko bao loi
console.log(idBinh2);
const idAn2 = userWithoutData.orders?.[0]?.id;
console.log(idAn2);
class BaseService {
    isReady = false;
    serviceNAme;
    constructor(name) {
        this.serviceNAme = name;
    }
    async setUp() {
        console.log(`[${this.serviceNAme} Dang khoi tao dich vu ...]`);
        await new Promise(resolve => setTimeout(resolve, 500));
        this.isReady = true;
    }
    log(message) {
        console.log(`[LOG-${this.serviceNAme}] : ${message}`);
    }
}
class DatabaseService extends BaseService {
    connectString;
    constructor(dbName, connect) {
        super(dbName);
        this.connectString = connect;
    }
    connect() {
        if (!this.isReady) {
            this.log('Chua san sang, vui long chay setUp truoc');
            return;
        }
        this.log(`Da ket noi DB qua ${this.connectString}`);
    }
    query(sql) {
        if (!this.isReady) {
            this.log('Dich vu chua khoi dong');
            return;
        }
        this.log(`thuc thi SQL: ${sql}`);
    }
    //override lai phuong thuc cua thang cha
    log(message) {
        console.log(`[DB-${this.serviceNAme}] : ${message}`);
    }
}
async function runService() {
    const dbService = new DatabaseService('UserDb', 'mongoDB://localhost:27017');
    await dbService.setUp();
    dbService.connect();
    dbService.query('Select * FROM USER');
}
runService();
async function fetchBook() {
    const apiURL = 'https://api.anhtester.com/api/books';
    try {
        const response = await fetch(apiURL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Loi API : ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Khong the lay du lieu sach', error);
        throw error;
    }
}
//bai toan minh muon lay image.path (la image.url) neu ko co thi tra ra 'Khong co anh'
async function displayedBook() {
    try {
        console.log('Dang tai danh sach cua Sach ...');
        const apiData = await fetchBook();
        apiData.response.forEach(book => {
            const imagePath = book.image.length > 0 ? book.image?.[0]?.path : 'Khong co anh';
            const isImage = book.image?.[0]?.path ? book.image?.[0]?.path : 'Khong co anh';
            //   isImage ? isImage : 'Khong co anh'
            console.log(`- ID: ${book.id}, Ten: ${book.name}, Gia: ${book.price}`);
            console.log(`Hinh anh ${isImage}`);
        });
    }
    catch (error) {
        console.log('Da xay ra loi');
    }
}
displayedBook();
export {};
//# sourceMappingURL=lesson11.js.map