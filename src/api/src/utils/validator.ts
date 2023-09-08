import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { Gender } from "../models/users/Gender";
import { getMaxListeners } from "process";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class Validator {
    constructor() {}

    public testEmail(email: string): boolean {
        const test = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return test.test(email);
    }

    public testPassword(password: string): string | boolean {
        if (password.length < 8) return "The password field cannot be less than 8";
        if (password.length > 16) return "The password field cannot be greater than 16";
        return false;
    }

    public testString(string: string): boolean {
        const test = /^[A-Z\s]+$/i;
        return test.test(string);
    }

    public testNumber(number: string): boolean {
        const test = /^[0-9]*$/;
        return test.test(number);
    }

    public testAge(birthDateUser: string): string | boolean {
        const birthDate = new Date(birthDateUser);

        const today = new Date();

        const minYears = 18;
        const maxYears = 115;

        const minDate = new Date(today.getFullYear() - minYears, today.getMonth(), today.getDate());
        const maxDate = new Date(today.getFullYear() - maxYears, today.getMonth(), today.getDate());

        if (birthDate > today || birthDate < maxDate) return "Invalid date";
        if (birthDate > minDate) return "You must be over 18 years old";

        return false;
    }

    public testGender(gender: Gender | string): boolean {
        if (gender === Gender.female || gender === Gender.male || gender === Gender.nonBinary) return false;
        return true;
    }
}
