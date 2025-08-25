function filterGames() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const genreSelect = document.getElementById('genreSelect').value;
  const ul = document.getElementById('gameList');
  const li = ul.getElementsByTagName('li');
  
  for (let i = 0; i < li.length; i++) {
    const genre = li[i].getAttribute('data-genre');
    const a = li[i].getElementsByTagName('a')[0];
    const textValue = a.textContent || a.innerText;
    
    const matchesGenre = (genreSelect === 'all' || genre === genreSelect);
    const matchesSearch = textValue.toLowerCase().indexOf(input) > -1;
    
    li[i].style.display = (matchesGenre && matchesSearch) ? "" : "none";
  }
}