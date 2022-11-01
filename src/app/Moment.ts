//igual a entidade do banco de dados 
export interface Moment {
    id?: number;
    title: string;
    description: string;
    image: string;
    created_at?: string;
    updated_at?: string;
    comments?: [{ text: string; username: string }];
}