import React from "react";
import blog1 from '../../assets/blog1.png';
import blog2 from '../../assets/blog2.png';
import blog3 from '../../assets/blog3.png';

import '../Blogs/Blogs.css';

function Blog() {
    return(
        <section id="blog" className="blog">
            <div className="blog-head">
                <div className="blog-heading">
                    <h1>Latest Health Insights</h1>
                    <h3>View All Articles</h3>
                </div>
                <div className="blog-content">
                    <div className="blog-card">
                        <img src={blog1} alt="blog-img" />
                        <h2>Understanding Heart Health</h2>
                        <p> Essential tips for maintaining a healthy heart and preventing cardiac issues.</p>
                        <h3>Read More <br />→</h3>
                    </div>
                    <div className="blog-card">
                    <img src={blog2} alt="blog-img" />
                        <h2>Understanding Heart Health</h2>
                        <p> Essential tips for maintaining a healthy heart and preventing cardiac issues.</p>
                        <h3>Read More <br />→</h3>
                    </div>
                    <div className="blog-card">
                    <img src={blog3} alt="blog-img" />
                        <h2>Understanding Heart Health</h2>
                        <p> Essential tips for maintaining a healthy heart and preventing cardiac issues.</p>
                        <h3>Read More <br />→</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;