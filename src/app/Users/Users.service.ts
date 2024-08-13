import { inject, Injectable } from "@angular/core";
import { IUser, User } from "./Users.model";
import { HttpClient } from "@angular/common/http";
import { AuthChangeEvent, AuthSession, createClient, Session, SupabaseClient } from '@supabase/supabase-js'
import { environment } from "../../../environment";

@Injectable({ providedIn: 'root' })
export class UsersService {
    private supabase: SupabaseClient;
    _session: AuthSession | null = null;
        
    constructor() {
        this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
    }    

    get session() {
        this.supabase.auth.getSession().then(({ data }) => {
        this._session = data.session
        })
        return this._session
    }

    authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
        return this.supabase.auth.onAuthStateChange(callback)
    }

    async getUsers() {
        let users: IUser[] = [];
        try {
            const { data, error, status } = await this.supabase
                .from('users')
                .select(`id, name, avatar, created_at, updated_at`);
            users = data?.map(user => new User(user)) || [];
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error:', error.message);
            }
        }
        return users;
    };

    async getUser(id: string): Promise<IUser | undefined> {
        let user: IUser | undefined = undefined;
        try {
            const { data, error, status } = await this.supabase
                .from('users')
                .select(`id, name, avatar, created_at, updated_at`)
                .eq('id', id);
            if (!data) throw new Error('User not found');
            user = new User(data[0]);
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error:', error.message);
            }
        }
        return user;
    };
}