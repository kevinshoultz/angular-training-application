import { Injectable } from "@angular/core";
import { IUser } from "./Users.model";

@Injectable({ providedIn: 'root' })
export class UsersService {
    private users: IUser[] = [
        {
            id: 'u1',
            name: 'Jasmine Washington',
            avatar: 'user-1.jpg',
        }, {
            id: 'u2',
            name: 'Emily Thompson',
            avatar: 'user-2.jpg',
        }, {
            id: 'u3',
            name: 'Marcus Johnson',
            avatar: 'user-3.jpg',
        }, {
            id: 'u4',
            name: 'David Miller',
            avatar: 'user-4.jpg',
        }, {
            id: 'u5',
            name: 'Priya Patel',
            avatar: 'user-5.jpg',
        }, {
            id: 'u6',
            name: 'Arjun Singh',
            avatar: 'user-6.jpg',
        },
    ];

    getUsers(): IUser[] {
        return this.users;
    };

    getUser(id: string): IUser | undefined {
        return this.users.find(user => user.id === id);
    };
}