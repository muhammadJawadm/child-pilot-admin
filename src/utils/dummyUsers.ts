// Dummy users for authentication
export const dummyUsers = [
    {
        id: 1,
        email: 'superadmin@kinnected.com',
        password: 'super123',
        name: 'Robert Fox',
        role: 'super-admin' as const,
        avatar: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        id: 2,
        email: 'admin@kinnected.com',
        password: 'admin123',
        name: 'Jane Doe',
        role: 'daycare-admin' as const,
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
];

export type UserRole = 'super-admin' | 'daycare-admin';

export interface User {
    id: number;
    email: string;
    name: string;
    role: UserRole;
    avatar: string;
}
