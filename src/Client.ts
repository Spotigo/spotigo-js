export class Client {

    host: string;
    pass: string;

    constructor(host: string, pass: string = "") {
        this.host = host;
        this.pass = pass;
    }
}