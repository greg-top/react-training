import BlogTile from './components/BlogTile';

const posts = [
  { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
  { id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
  { id: 3, title: 'Adam Małysz Zgolił wąs',
    intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
  }
]

function App() {
  return (
    <div className="clickbait">
      {posts.map((post) => {
        return <BlogTile title={post.title} intro={post.intro} key={post.id} />
      })}
    </div>
  );
}

export default App;
