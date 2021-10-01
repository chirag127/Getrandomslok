fetch("https://bhagavadgitaapi.in/slok?api_key=b89a6a08cd62a233e")

  .then(data => data.json())
  .then(sData => {
      const slokT = sData.slok;
      const siva = sData.siva.et;

      const sp = document.getElementById('sp')
      const mp = document.getElementById('mp')

      sp.innerHTML = slokT  ;
      mp.innerHTML = "It's chapter number.verse number and meaning are :- "+ siva  ;

  }) 
