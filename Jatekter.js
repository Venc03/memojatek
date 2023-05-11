import Kartya from "./Kartya.js";

class Jatekter{
    #keplista = [];
    #kivalasztottKepekLista = [];

    constructor(kepLista){
        this.#keplista = kepLista;
        const ART = $("article");
        for (let i = 0; i < this.#keplista.length; i++) {
            let kartya = new Kartya(kepLista[i], ART);
        }
    }
};

export default Jatekter;