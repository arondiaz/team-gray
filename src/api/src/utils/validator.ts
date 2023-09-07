import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class Validator {
    constructor() {}

    public testEmail(email: string): boolean {
        const test = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return test.test(email);
    }

    public testPassword(password: string): string | boolean {
        if (password.length < 8) return "The field cannot be less than 8";
        if (password.length > 16) return "The field cannot be greater than 16";
        return false;
    }

    public testName(name: string): boolean {
        const test = /^[A-Z]+$/i;
        return test.test(name);
    }

    public testPhone(phone: string): boolean {
        // todo: implement validate to min length
        const test = /^[0-9]*$/;
        return test.test(phone);
    }
}
