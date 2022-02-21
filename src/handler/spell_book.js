let spell_book = {}

let nameGen = function() {
    const nm1 = ["Aug", "Corrupt", "Deflect", "Dupl", "Ech", "Ejec", "Erec", "Evic", "Evict", "Exp", "Exting", "Ignit", "Ill", "Imb", "Imm", "Incant", "Incent", "Incept", "Invoc", "Lag", "Magn", "Mend", "Morph", "Muffl", "Oblit", "Obsc", "Pest", "Petrif", "Port", "Purif", "Rect", "Refl", "Reflect", "Sanc", "Sanct", "Scorch", "Slug", "Supr", "Tranq", "Trans", "Alte", "Alter", "Apear", "Aper", "Ara", "Augmen", "Clar", "Clari", "Confus", "Conju", "Conjur", "Cor", "Corrup", "Cur", "Decim", "Defen", "Deler", "Depres", "Depri", "Descen", "Divi", "Ethe", "Ether", "Evi", "Expel", "Expul", "Exte", "Extermi", "Extermin", "Exti", "Fier", "Fir", "Flar", "Fluo", "Igni", "Illumi", "Immol", "Immun", "Imped", "Impedim", "Imper", "Incen", "Incre", "Increm", "Incren", "Inter", "Iso", "Isol", "Lev", "Levi", "Levita", "Libe", "Liber", "Loco", "Locomo", "Lum", "Lumi", "Magni", "Mobi", "Mobil", "Mor", "Muf", "Mystif", "Neur", "Neural", "Ob", "Obli", "Obliter", "Pes", "Pesti", "Pet", "Petri", "Por", "Porta", "Pro", "Prot", "Puri", "Quen", "Re", "Red", "Redu", "Rege", "Regen", "Rejuvi", "Rel", "Releas", "Reno", "Rep", "Repa", "Repe", "Repel", "Restor", "Revi", "Sco", "Scor", "Ser", "Sever", "Shri", "Sil", "Silen", "Slu", "Stu", "Stup", "Supres", "Tra", "Tranqi", "Venge"];
    const nm2 = ["a", "actum", "actus", "arbus", "armus", "aro", "ashio", "asi", "asis", "aris", "ate", "ecto", "ectum", "ectus", "ego", "egra", "egris", "elio", "ello", "em", "empra", "endio", "endius", "endo", "enim", "enis", "enta", "entus", "enum", "enus", "eo", "eom", "eos", "eous", "erbus", "ergio", "erio", "eris", "erous", "es", "esco", "eseo", "etus", "eum", "eus", "i", "iate", "iatis", "iato", "ictum", "ictus", "icum", "icus", "id", "igeo", "im", "indo", "inio", "inius", "io", "ior", "is", "iseo", "ite", "iteus", "itus", "ium", "ius", "orgio", "ori", "orpus", "ortia", "ortis", "ortus", "orus", "otis", "otum", "ucio", "ucto", "ula", "ulsi", "ulsis", "ulso", "ulus", "um", "undis", "undo", "uno", "uro", "us"];
    const nm3 = ["Anim", "Anno", "Arach", "Arachn", "Arachni", "Av", "Avi", "Ban", "Bull", "Can", "Cand", "Candel", "Cani", "Canin", "Consi", "Consil", "Contag", "Dem", "Demo", "Demon", "Drac", "Drag", "Elem", "Elemen", "Element", "Fel", "Feli", "Felin", "Foc", "Focu", "Infec", "Infect", "Intim", "Intimi", "Intimid", "Ligh", "Light", "Noct", "Oppon", "Oppres", "Padl", "Padloc", "Perso", "Person", "Pest", "Rasc", "Rat", "Serp", "Serpen", "Stri", "Strix", "Torch", "Torm", "Tormen", "Tyr", "Tyran", "Vesper", "Vex", "Vexat", "Vir", "Viral", "Ache", "Ago", "Agon", "Miser"];
    const rnd9 = parseInt(Math.floor(Math.random() * nm1.length));
    const rnd10 = parseInt(Math.floor(Math.random() * nm2.length));
    const rnd10b = parseInt(Math.floor(Math.random() * nm2.length));
    const rnd11 = parseInt(Math.floor(Math.random() * nm3.length));
    return nm1[rnd9] + nm2[rnd10] + " " + nm3[rnd11] + nm2[rnd10b];

}

let remove_spell = function(user_id) {
    delete spell_book[user_id];
}

// generate spell and return it
function claim_spell(user_id, chamber_id) {
    const gen_spell = nameGen();
    spell_book[user_id] = {"chamber_id": chamber_id, "spell": gen_spell};

    return gen_spell;
}

// check spell and return chamber (-1 if check was incorrect)
function use_spell(user_id, spell) {
    if ((spell_book[user_id] !== undefined) && (spell_book[user_id].spell === spell)) {
        const chamber_id = spell_book[user_id].chamber_id;
        remove_spell(user_id)
        return chamber_id;

    } else {
        return -1;

    }
}

module.exports = {claim_spell, use_spell};
