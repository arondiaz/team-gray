import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { ICategory } from "./category.interface";

@Injectable({ lifeTime: DependencyLifeTime.Transient })
export class Category implements ICategory {
    id: number = 0;
    name: string = "";
}
