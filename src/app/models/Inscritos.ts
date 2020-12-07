export class Inscritos {
    constructor(
        public names: string,
        public lastnames: string,
        public username: string,
        public password: string,
        public idIns?: number,
        public avatar?: string
    ) {
    }
}
