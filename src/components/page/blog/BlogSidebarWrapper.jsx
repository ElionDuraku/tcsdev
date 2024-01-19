import React from 'react'
import BannerWidget from './BannerWidget'
import CatagoryWidget from './CatagoryWidget'
import NewPostWidget from './NewPostWidget'
import PostTagWidget from './PostTagWidget'
import SearchWidget from './SearchWidget'
import Pagination from '../../common/Pagination'
import SingleBlog from './SingleBlog'

function BlogSidebarWrapper() {
  return (
    <>
     <div className="blog-grid sec-mar-top">
         <div className="container">
             <div className="row">
                 <div className="col-lg-4">
                     <SearchWidget/>
                     <CatagoryWidget/>
                     <NewPostWidget/>
                     <PostTagWidget/>
                     <BannerWidget/>
                 </div>
                 <div className="col-lg-8">
                     <div className="blog-item-grid">
                         <div className="row g-4">
                             <SingleBlog image="/img/blog/blog-1.jpg" date="19.01.2024" title="UI/UX" details="What happens when you think AI is lying about you?"  />
                             <SingleBlog image="/img/blog/blog-2.jpg" date="19.01.2024" title="Software" details="Sheryl Sandberg to step down from Meta board."  />
                             <SingleBlog image="/img/blog/blog-3.jpg" date="19.01.2024" title="Dashbord" details="Spotify attacks Apple's 'outrageous' 27% commission."  />
                             <SingleBlog image="/img/blog/blog-4.jpg" date="19.01.2024" title="3D Design" details="Google search quality slips, Apple axes Watch Series 9 blood oxygen sensor, and more"  />
                             <SingleBlog image="/img/blog/blog-5.jpg" date="19.01.2024" title="Graphic" details="Tesla’s Cybertruck is having trouble living up to the hype."  />
                             <SingleBlog image="/img/blog/blog-6.png" date="19.01.2024" title="App" details="Can AI and a chatbot help smokers quit? New app from Fred Hutch offers personal coaching."  />
                             <SingleBlog image="/img/blog/blog-7.jpg" date="19.01.2024" title="Development" details="Astrobotic’s lunar lander falls into South Pacific after missing out on moon landing."  />
                             <SingleBlog image="/img/blog/blog-8.jpg" date="19.01.2024" title="Software" details="Amazon logistics leader John Felton takes new role as CFO of Amazon Web Services"  />
                         </div>
                     </div>
                     <Pagination />
                 </div>
             </div>
         </div>
    </div>   
    </>
  )
}

export default BlogSidebarWrapper