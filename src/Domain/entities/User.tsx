export interface User {
    id?:              string;
    name:            string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    email:           string;
    password:        string;
    session_token?:  string;
}