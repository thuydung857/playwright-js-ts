import { setTimeout } from "timers";
import type { ILoginData } from '../types/login-data.ts'
import { promises } from "dns";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export class LoginPage {
    async navigate(): Promise<void> {
        console.log(`LoginPage : Dang dieu huong toi trang dang nhap ...`);
        await delay(500)
        console.log('Da den trang dang nhap');
    }

    async enterUserName(username: string): Promise<void> {
        console.log(`LoginPage : Dang nhap voi username ${username}`);
        await delay(200)
    }

    async enterPassword(password: string): Promise<void> {
        console.log(`LoginPage : Dang nhap voi password ${password}`);
        await delay(200)
    }

    async clickLogin(): Promise<void> {
        console.log(`LoginPage : Dang nhan nut dang nhap`);
        await delay(1000)
    }

    async login(credentials: ILoginData): Promise<void> {
        await this.enterUserName(credentials.username)
        if (credentials.password) {
            await this.enterPassword(credentials.password)
        }
        await this.clickLogin()
    }

    async verifyLoginResult(expectedResult: string): Promise<boolean> {
        console.log(`LoginPage: Dang kiem tra ket qua ... Mong doi la ${expectedResult}`);
        let actualResult: string
        if (expectedResult === 'SUCCESS') {
            actualResult = 'SUCCESS'
        } else if (expectedResult === 'LOCKED_OUT_ERROR') {
            actualResult = 'LOCKED_OUT_ERROR'
        } else {
            actualResult = 'INVALID_CREDENTIALS_ERROR'
        }
        console.log(`LoginPage : Ket qua thuc te la :  ${actualResult}`);
        return actualResult === expectedResult 
    }
}