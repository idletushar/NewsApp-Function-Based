import React from 'react'

const NewsItem = (props)=>{
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='container'>
        <div className="card" style={{width: "18rem"}}>
          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
            {source}
          </span>
          {/* ternary operator */}
          <img src={!imageUrl?"https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className='card-text'><small className='text-success'>By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target='_blank' className='btn btn-dark' rel="noreferrer">Read More</a>
            </div>
        </div>  
      </div>
    )
  }

export default NewsItem
