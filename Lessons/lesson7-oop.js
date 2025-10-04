
class Car {
    //1 class field
    isEngineOn = false;
    //2 constructor: nhan cac thong tin rieng cua tung chiec xe
    //constructor('toyota', 'den'){
    // car1.brand = 'toyota'
    // car1.color = 'den' 
// }
    constructor(brand, color){
        //car1.newBrand = 'toyota'
        this.newBrand = brand
        this.color = color
    }
    //3 phuong thuc
    startEngine = ()=>{
        this.isEngineOn = true
        console.log(`Dong co xe ${this.newBrand} da duoc khoi dong`);
        
    }
    displayInfo = ()=>{
        console.log(`Day la chiec xe ${this.newBrand} mau ${this.color}`);
        
    }
}

//su dung
const car1 = new Car('Toyota', 'Den')
// console.log(`car1 co thuoc tinh ${car1.isEngineOn}`);
car1.displayInfo()




class NguoiDung {
    constructor(email, tenHienThi = 'Khach', vaiTro = 'user'){
        this.email = email
        this.tenHienThi = tenHienThi
        this.vaiTro = vaiTro
    }
    gioiThieu(){
        console.log(`Ten ${this.tenHienThi}, Email: ${this.email}, Vaitro:${this.vaiTro}`);
        
    }
}
const user1 = new NguoiDung('user1@gmail.com')
user1.gioiThieu()
const user2 = new NguoiDung('user2@gmail.com', 'User2')
user2.gioiThieu()


//OOP in JS
//private = #
//private a = #a



class Animal {
    constructor(name){
        this.name = name
    }
    eat(){
        console.log(`${this.name} dang an`);
        
    }
}
class Dog extends Animal {
    constructor(name, color){
        super(name) // goi constructor cua lop cha animal
        this.color = color
    }
    bark(){
        console.log('Go go');
        
    }
}
const myDog = new Dog('Kitty', 'Vang')
myDog.eat()
myDog.bark()






class Shape{
    draw(){
        console.log('ve hinh dang chung');
        
    }
}
class Circle extends Shape {
    draw(){
        console.log('ve 1 hinh tron');
        
    }
}

class Square extends Shape {
    draw(){
        console.log(' ve 1 hinh vuong');
        
    }
}
const shapes = [new Circle(), new Square(), new Shape()
    
]
shapes.forEach(shape => shape.draw())










//page-objects
// -- BasePage.js =>class cha chua cac hanh dong chung
// -- LoginPage.js =>class cho trang dang nhap
// -- HomePage.js => class cho trang chu
//tests
// login.test.js // kich ban test 
//export => import
//File basePage.js
//playwright => se co 1 gia tri chinh la page (driver o trong selenium,)
class BasePage {
    constructor(page, url) {
        this.page = page
        this.url = url
    }

    async navigateTo() {
        // this.page.navigateTo()
        console.log(`ACTION: dang dieu huong toi trang ${this.url}`);
    }
}
//File LoginPage.js
class Loginpage extends BasePage {
    //locator( vi tri cac element o tren UI)
    userNameInput = '#username'
    passwordInput = '#password'
    loginButton = '#login-button'
    constructor(page) {
        super(page, '/login')
    }
    async enterUsername(username) {
        console.log(`ACTION: Nhap username ${username} vao o ${this.userNameInput}`);
    }
    async enterPassword(password) {
        console.log(`ACTION: Nhap username ${password} vao o ${this.passwordInput}`);
    }
    async clickLoginButton() {
        console.log(`ACTION: Click vao nut ${this.loginButton}`);
    }
    async login(username, password){
        console.log(`WORKFLOW - THU HIEN DANG NHAP VOI USER ${username}`);
        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.clickLoginButton()
        
    }
}
class HomePage extends BasePage {
    welComemessage = '#welcome-message'
    constructor(page){
        super(page, '/home')
    }
    async getWelcomeMessage(){
        console.log(`ACTION:Lay noi dung tu ${this.welComemessage}`);
        return 'Chao mung ban quay tro lai'
        
    }
}
//file login.test.js
//test case 2. -> const loginPage = new LoginPage(page)=> 
async function runLoginTest() {
    console.log('BAT DAU KICH BAN - DANG NHAP THANH CONG');
    //gia lap doi tuong 'page' 
    const fakePage = {name: 'Fake page'}
    const loginPage = new Loginpage(fakePage)
    const homePage = new HomePage(fakePage)
    //1. Dieu huong toi trang dang nhap
    await loginPage.navigateTo()
    //2 thuc hien hanh dong dang nhap\
    await loginPage.login('Hoang', '1234567')
    //3 chuyen sang trang chu va lay ket qua
    homePage.navigateTo
    const message = await homePage.getWelcomeMessage()
    if(message.includes('Chao mung ban quay tro lai')){
        console.log('TES PASSSED');
        
    }else{
        console.log('TEST FAILED');
        
    }
    
}

runLoginTest()