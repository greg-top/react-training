import './clickbait.css';
import './clickbait-flex.css';

const posts = [
  { id: 1, title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział'},
  { id: 2, title: 'Wszyscy zazdroszą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'},
  { id: 3, title: 'Adam Małysz Zgolił wąs',
    intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
  }
]

const cutIntro = (el, chars) => {
  console.log(`el: ${el}`);
  console.log(`chars: ${chars}`);
  if (el.length > chars) {
    return `${el.substring(0, chars)}...`;
  } else {
    return el;
  }
}

function BlogTile({title, intro}) {
  return (
    <div className="card">
      <span className="card__number"></span>
      <span className="card__intro--cut">{title}</span>
      <span className="card__body">{cutIntro(intro, 15)}</span>
    </div>
  )
}

function App() {
  return (
    <div className="clickbait">
      {posts.map((post, index) => {
        return <BlogTile title={post.title} intro={post.intro} key={post.id} />
      })}
    </div>
  );
}

export default App;
