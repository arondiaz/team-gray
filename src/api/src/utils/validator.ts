import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class Validator {
    constructor() {}

    testEmail(email: string): boolean {
        const test = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return test.test(email);
    }
}
