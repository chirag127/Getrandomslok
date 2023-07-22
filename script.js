const slokcount = [
  47, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78,
];
const chapter = Math.floor(Math.random() * 17) + 1;
const slok = Math.floor(Math.random() * slokcount[chapter - 1]) + 1;
const gitaslok_url = `https://bhagavadgitaapi.in/slok/${chapter}/${slok}/`;

fetch(gitaslok_url)
  .then((data) => data.json())
  .then((sData) => {
    const slokT = sData.slok;

    const siva = sData.siva.et;

    const sp = document.getElementById("sp");

    const mp = document.getElementById("mp");

    sp.innerHTML = slokT;

    mp.innerHTML = siva;
  });
