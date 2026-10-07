export interface IResponseObject<T> {
    isError: boolean;
    message: string;
    data: T;
}

export type Lang = "en" | "de";
