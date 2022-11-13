import AppDesk from 'components/AppDesk/AppDesk';

function App() {
    // TODO (test)
  const columns = [
      {id: '1', title: 'Anime', cards: [{title: 'Naruto'}]},
      {id: '2', title: 'Anime2', cards: [{title: 'Naruto'}]},
      {id: '3', title: 'Anime3', cards: [{title: 'Naruto'}]},
  ]

  return (
    <div className="App">
      <AppDesk columns={columns}/>
    </div>
  );
}

export default App;
