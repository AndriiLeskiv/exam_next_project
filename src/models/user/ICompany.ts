import {IAddress} from "@/models/user/IAddress";

export interface ICompany {
    department: string;
    name: string;
    title: string;
    address: IAddress[];
}