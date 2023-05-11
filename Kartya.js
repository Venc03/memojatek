class Kartya{
    #adat
    #divElem
    #imgElem

    constructor(adat, szuloElem){
        this.#adat = adat;
        let txt = `<div class = "kartya"><img src = "${adat}" alt="kep"></div>`;
        szuloElem.append(txt);
    }

    getAdat(){
        return this.#adat;
    }

    trigger(){
        const ev = new CustomEvent("trigger", {detail: this.#adat})
            dispatchEvent(ev);
    }
};
export default Kartya;