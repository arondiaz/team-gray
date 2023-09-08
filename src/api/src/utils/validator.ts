import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { Gender } from "../models/users/Gender";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class Validator {
    constructor() {}

    public testStringTypeData(data: string[]) {
        for (let i = 0; i < data.length; i++) {
            if (typeof data[i] === "undefined") return false;
            if (typeof data[i] != "string") return true;
        }
        return false;
    }

    public testEmail(email: string): boolean {
        const test = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!test.test(email)) return false;
        return true;
    }

    public testPassword(password: string): string | boolean {
        if (password.length < 8) return "The password field cannot be less than 8";
        if (password.length > 16) return "The password field cannot be greater than 16";
        return false;
    }

    public testString(string: string): boolean {
        const test = /^[A-ZÁÉÍÓÚÜÑ\s]+$/i;
        return test.test(string);
    }

    public testNumber(number: string): boolean {
        const test = /^[0-9]*$/;
        return test.test(number);
    }

    public testDni(dni: string): boolean {
        if (dni.length < 8 || dni.length > 9) return false;
        return true;
    }

    public testAge(birthDateUser: string): string | boolean {
        const test = /^\d{4}-\d{2}-\d{2}$/;
        if (!test.test(birthDateUser)) return "Invalid format on birth_date";

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
