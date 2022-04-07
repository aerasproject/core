export interface ITechnician {
    document: string;
	phone: string;
	services: Array<string>;
	userId: string;
	addressId: string | null;
	id: string;
	createdAt: string;
	updatedAt: string;
}