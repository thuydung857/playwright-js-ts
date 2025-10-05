//Cac thuoc tinh trong Class
// readonly, private, protected
class Aminal {
    readonly name: string //readonly
    private age: number //private

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }


    // changeName(newName: string) {
    //     this.name = newName    // readonly nen ko duoc thay doi gia tri
    // }

    printName() {
        return this.name
    }
}

const dog = new Aminal('Buddy', 2)
console.log(dog.name);
console.log(dog.printName());
// console.log(dog.age);   //vi la private nen khong truy cap dc




//protected
class GameCharacter {
    protected health: number

    constructor(health: number) {
        this.health = health
    }

    protected takeDamage(amount: number): void {
        this.health -= amount
        console.log(`Bi mat ${amount} damage , con lai ${this.health}`);
    }
}


class Warrior extends GameCharacter {
    attack(target: GameCharacter): void {
        console.log('Warrior attack!');
        // target.takeDamage(10)    //khong truy cap duoc vi ka protected, phai thong qua this.
    }

    defendAndAttack(): void {
        console.log('warrior attacks with a special move');
        this.takeDamage(5)    //su dung nhu vay moi co the truy cap dc protected
    }
}

const warrior = new Warrior(100)
warrior.defendAndAttack()


interface IOrder {
    id: number;
    total: number
}

interface IUserWithOrder {
    name: string;
    orders?: IOrder[]
}

const userWithData: IUserWithOrder = {
    name: 'Binh',
    orders: [{ id: 101, total: 100 }]
}

const userWithoutData: IUserWithOrder = {
    name: 'An'
}
//cach1
function getFirstOrderId(user: IUserWithOrder): number | undefined {
    if (user.orders && user.orders.length > 0) {
        return user.orders[0]?.id
    }
    return undefined
}

const idBinh = getFirstOrderId(userWithData)
console.log(idBinh);

const idAn = getFirstOrderId(userWithoutData)
console.log(idAn);


//cach2 goi la optional chaining ...

const idBinh2 = userWithData.orders?.[0]?.id  //syntax trong TS cho phep co the undefine, va se tra luon la undefine va ko bao loi
console.log(idBinh2);

const idAn2 = userWithoutData.orders?.[0]?.id
console.log(idAn2);



//vi du minh viet 1 aci class khoi tao viec hket noi db
//app nho ket noi db
//aync await => tra ra promise => va se dung await de hung cai process
//generic <T>

interface IInitializeable {
    isReady: boolean
    setUp(): Promise<void>
}

interface ILoggable {
    log(message: string): void
}





interface IDataAcess {
    connect(): void
    query(sql: string): void
}

class BaseService implements IInitializeable, ILoggable {
    isReady: boolean = false
    protected serviceNAme: string


    constructor(name: string) {
        this.serviceNAme = name;
    }

    async setUp(): Promise<void> {
        console.log(`[${this.serviceNAme} Dang khoi tao dich vu ...]`);
        await new Promise(resolve => setTimeout(resolve, 500))
        this.isReady = true
    }

    log(message: string): void {
        console.log(`[LOG-${this.serviceNAme}] : ${message}`);
    }
}


class DatabaseService extends BaseService implements IDataAcess {
    private connectString: string

    constructor(dbName: string, connect: string) {
        super(dbName)
        this.connectString = connect
    }

    connect(): void {
        if (!this.isReady) {
            this.log('Chua san sang, vui long chay setUp truoc')
            return
        }
        this.log(`Da ket noi DB qua ${this.connectString}`)
    }

    query(sql: string): void {
        if (!this.isReady) {
            this.log('Dich vu chua khoi dong')
            return
        }
        this.log(`thuc thi SQL: ${sql}`)
    }
    //override lai phuong thuc cua thang cha
    log(message: string): void {
        console.log(`[DB-${this.serviceNAme}] : ${message}`);
    }
}


async function runService() {
    const dbService = new DatabaseService('UserDb', 'mongoDB://localhost:27017')
    await dbService.setUp()
    dbService.connect()
    dbService.query('Select * FROM USER')
}

runService()



//javascript khong co khuon mau cua 1 object , nen no ko biet object minh dang goi la cai nao
//schema la id , name, category_id
//{
//   "message": "Success",
//   "response": [
//     {
//       "id": 371,
//       "name": "Test3107",
//       "category_id": 122,
//       "price": 1200,
//       "release_date": "2025/07/30",
//       "status": 1,
//       "image": []
//     },
//     {
//       "id": 372,
//       "name": "Testing API V7906",
//       "category_id": 139,
//       "price": 110,
//       "release_date": "2025/02/28",
//       "status": 1,
//       "image": [
//         {
//           "id": 61,
//           "path": "public/images/0rS5miO4nPAv9unVQ0XomaUjJENCt6E1R1eN0aRq.png"
//         }
//       ]
//     },


interface apiImage {
    id: number;
    path: string;
}

interface IBook {
    id: number;
    name: string;
    category_id: number;
    price: number;
    release_date: string;
    status: number;
    image: apiImage[]
}

interface IApiResponse {
    message: string;
    response: IBook[]
}


async function fetchBook(): Promise<IApiResponse> {
    const apiURL = 'https://api.anhtester.com/api/books'

    try {
        const response = await fetch(apiURL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        if (!response.ok) {
            throw new Error(`Loi API : ${response.status} ${response.statusText}`)
        }
        const data: IApiResponse = await response.json()
        return data
    } catch (error) {
        console.error('Khong the lay du lieu sach', error);
        throw error

    }
}

//bai toan minh muon lay image.path (la image.url) neu ko co thi tra ra 'Khong co anh'
async function displayedBook() {
    try {
        console.log('Dang tai danh sach cua Sach ...');
        const apiData = await fetchBook()
        apiData.response.forEach(book => {
            const imagePath = book.image.length > 0 ? book.image?.[0]?.path : 'Khong co anh'
            const isImage = book.image?.[0]?.path ? book.image?.[0]?.path : 'Khong co anh'
         //   isImage ? isImage : 'Khong co anh'

            console.log(`- ID: ${book.id}, Ten: ${book.name}, Gia: ${book.price}`);
            console.log(`Hinh anh ${isImage}`);
        })
    } catch (error) {
        console.log('Da xay ra loi');
    }
}

displayedBook()
