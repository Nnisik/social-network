import './styles/style.css';

export default function Post () {
    return (
        <article className="post">
            <img className='post-img' src="" alt="" />
            <section className="post-info">
                <div className="post-main-info">
                    <h3 className="post-header">Post header</h3>
                    <div className="like-btn"></div>
                </div>
                <p className="post-descript">Post description</p>
                <div className="post-extra-info">
                    <p className="post-author-info">Author</p>
                    <p className="post-date">15.04.24</p>
                </div>
            </section>
        </article>
    );
}