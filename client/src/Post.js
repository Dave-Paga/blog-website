import React from 'react'

export default function Post() {
  return (
    <div className="post">
        <div className="image">
          <img src="https://australiapostcollectables.com.au/content/dam/auspost_corp_microsites/collectables/stamp-issues-2023/peacock-spiders/peacock-spider-banner.jpg.auspostimage.970*0.medium.jpg" alt="" />
        </div>
        <div className="texts">
          <h2>Lorem ipsum</h2>
          <p className="info">
            <a href="" className="author">Author AUthor</a>
            <time>2023-1-2</time>
          </p>
          <p className="summary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem accusantium minus expedita a, odio unde! Quas repellat quae inventore possimus a optio modi praesentium. Id sit voluptate modi. Non, suscipit.</p>
        </div>
      </div>
  )
}
