export interface IUser {
    id: string;
    name: string;
    email: string;
    role: string;
    document: string;
    hasTechnicianProfile: boolean,
    profilePic: string | null;
    createdAt: string;
    updatedAt: string;
}