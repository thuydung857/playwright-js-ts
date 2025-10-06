import { log } from "console";
import { DataReader } from "../services/DataReader.ts";
import type { ILoginData } from '../types/login-data.js'

async function runLoginTest() {
    const dataReader = new DataReader()
    // const loginPage = new LoginPage()

    //Doc file json
    const loginCredentials = await dataReader.readJsonFile<ILoginData>('../data/login-credentials.json')
    if (loginCredentials.length === 0) {
        console.log('Khong co du lieu test de chay. Ket thuc');
        return
    }
    let testCaseNumber = 1

    for (const credential of loginCredentials) {
        console.log(`Bat dau voi test case ${testCaseNumber}, User: ${credential.username}`);
    }
}

runLoginTest()