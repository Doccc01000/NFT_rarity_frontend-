import React from 'react';
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Whale from './whales';
import InfiniteScroll from 'react-infinite-scroll-component';


const Main = ({
  metadata,
  handleToggleSidebar
}) => {

  const [count, setCount] = useState({
    prev: 0,
    next: 30
  })
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(metadata.slice(count.prev, count.next))
  const getMoreData = () => {
    if (current.length === metadata.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(metadata.slice(count.prev + 30, count.next + 30)))
    }, 2000)
    setCount((prevState) => ({ prev: prevState.prev + 30, next: prevState.next + 30 }))
  }

  return (
    
    <main className='main'>
          <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
            <FaBars />
          </div>
          <InfiniteScroll
          dataLength={current.length}
          next={getMoreData}
          hasMore={hasMore}
          >
          
          <div className='list-container'>
              {
                metadata.map(data=>{
                  return(<Whale data={data}/>)
                })
              }
          </div>
          </InfiniteScroll>
    </main>
  );
};

export default Main;
