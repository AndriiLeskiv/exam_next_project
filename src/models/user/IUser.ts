import {IHair} from "@/models/user/IHair";
import {IAddress} from "@/models/user/IAddress";
import {IBank} from "@/models/user/IBank";
import {ICompany} from "@/models/user/ICompany";
import {ICrypto} from "@/models/user/ICrypto";

export interface IUser{
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: IHair[];
    ip: string;
    address: IAddress[];
    macAddress: string;
    university: string;
    bank: IBank[];
    company: ICompany[];
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: ICrypto[];
    role: string;
}