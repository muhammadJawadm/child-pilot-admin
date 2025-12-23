// Dummy users for authentication
export const dummyUsers = [
    {
        id: 1,
        email: 'superadmin@kinnected.com',
        password: 'super123',
        name: 'Robert Fox',
        role: 'super-admin' as const,
        avatar: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
];

export type UserRole = 'super-admin';

export interface User {
    id: number;
    email: string;
    name: string;
    role: UserRole;
    avatar: string;
}
