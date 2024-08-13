export interface IUser {
    id: string;
    avatar: string;
    name: string;
    getAvatarPath?(): string;
}

export class User implements IUser {
    id: string;
    avatar: string;
    name: string;

    constructor(user: IUser) {
        this.id = user.id;
        this.avatar = user.avatar;
        this.name = user.name;
    }

    getAvatarPath(): string {
        return `assets/users/${this.avatar}`;
    }
}