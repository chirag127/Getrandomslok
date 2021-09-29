fetch("https://bhagavadgitaapi.in/slok?api_key=b89a6a08cd62a233e")
  .then(data => data.json())
  .then(sData => {
      const sText = sData.slok;
      const sp = document.getElementById('sp')

      sp.innerHTML = sText;
  })