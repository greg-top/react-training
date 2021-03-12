import './blog.css';
import './blog-flex.css';

const cutIntro = (el, chars) => {
  if (el.length > chars) {
    return `${el.substring(0, chars)}...`;
  }

  return el;
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

export default BlogTile;