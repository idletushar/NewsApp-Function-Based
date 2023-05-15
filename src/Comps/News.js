/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";//using from npmjs

const News = (props)=>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  
  const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
    const updateNews = async ()=>{
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true)
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      console.log(parsedData)
      props.setProgress(70);
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      props.setProgress(100);
    }

    useEffect(()=>{
      document.title= `${capitalizeFirstLetter(props.category)} - News4You`
      updateNews();
    }, [])

    const fetchMoreData = async ()=> {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  }


// This app is made withnthe help of NewsAPI
    return (
      <div className='container my=3'>
      <h1 className='text-center display-4' style={{marginTop:'90px'}}>News4You - {props.title}</h1>
      {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className='row shadow-lg p-3 mb-5 bg-white rounded'>
          {/* with this we can iterate all array items */}
          {/* use element */}
          {/* we can also do this by destructuring */}
          {articles.map((element)=>{
            // we are returning div so we gave "key" in div
            return <div className="col-md-4 my-2" key={element.url}>
                {/* each child should have unique "key" */}
                <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>     
        </div>
        
        </InfiniteScroll>
      </div>

    )
  }

        News.defaultProps ={
          country: 'in',
          pageSize: 6,
          category: "general",
          title: "Top Headlines" 
        }
        
        News.propTypes = {
          country: PropTypes.string,
          pageSize: PropTypes.number,
          category: PropTypes.string,
          title: PropTypes.string,
        }

export default News