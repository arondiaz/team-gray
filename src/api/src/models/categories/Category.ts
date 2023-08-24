import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { ICategory } from "./Category.interface";

@Injectable({ lifeTime: DependencyLifeTime.Transient })
export class Category implements ICategory {
    id?: number = 0;
    name: string = "";
}

