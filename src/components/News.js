import React,{useEffect,useState} from "react";

import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";

const News=(props)=>{
 
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  

  const update = async ()=> {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.contry}&category=${props.category}&apiKey=${props.apiKeys}&pagesize=${props.pagesize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {update()}, []);

  

  // const handleprv = async () => {
  //   console.log("previous");
  //   setPage(page-1)

  //   update();
  // };
  // const handlenext = async () => {
  //   console.log("next");
  //   setPage(page+1)

   
  //   update();
  // };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };



  const fetchMoreData = async() => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setPage(page+1)
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.contry}&category=${props.category}&apiKey=${props.apiKeys}&pagesize=${props.pagesize}&page=${page + 1}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults)
   
    
    
  };

  
    return (
      <div className="container my -3">
        <h1 style={{ color: "darkslateblue" }}>
          <center>DAILY NEWS OF {capitalizeFirstLetter(props.category)}</center>
        </h1>
        <div style={{ textAlign: "center" }}>
          {loading && <Spinner />}
        </div>

<InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<h4><center><Spinner/></center></h4>}
        >

        <div className="container">
        <div className="row my-5">
          {/* {!this.state.loading && */}
          
          
          {
              articles.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publish={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-success"
            onClick={this.handleprv}
          >
            Previous
          </button>
          <button
            className="btn btn-success"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pagesize)
            }
            onClick={this.handlenext}
          >
            Next
          </button>
        </div> */}
      </div>
    );
  
}

News.defaultProps = {
  contry: "in",
  pagesize: 10,
  category: "sports",
};

News.propTypes = {
  contry: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};



export default News;
