import { IEnvironment } from "./Environment";

export interface IAddress {
    id: string;
    name: string;
    isFavorite: boolean;
    street: string;
    number: string;
    city: string;
    state: string;
    neighborhood: string;
    environments: Array<IEnvironment>;
    complement: string;
    createdAt: string;
    updatedAt: string;
}