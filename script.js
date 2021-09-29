fetch("https://bhagavadgitaapi.in/slok?api_key=b89a6a08cd62a233e")
  .then(data => data.json())
  .then(jokeData => {
      const jokeText = jokeData.slok;
      const jokep = document.getElementById('jokep')

      jokep.innerHTML = jokeText;
  })