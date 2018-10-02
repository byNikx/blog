export interface User {
    id: string;
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    emailVerified: boolean;
    avatar: string;
    signedIn: boolean;
}

export interface Category {
    parent: number | null;
    id: number;
    name: string;
}