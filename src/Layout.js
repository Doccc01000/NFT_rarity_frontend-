import React, { useState ,useEffect,useLayoutEffect } from 'react';
import Aside from './Aside';
import CircularProgress from "@material-ui/core/CircularProgress";
import Loader from 'react-loader-advanced'
import Whale from './whales';
import { FaBars } from 'react-icons/fa';
// import InfinitScroll from 'react-infinite-scroll-component';
// import { List,AutoSizer } from "react-virtualized";
// // import { FixedSizeList as List } from "react-window";
// import VirtualizedItemGrid from 'react-virtualized-item-grid';
// import { VirtuosoGrid } from 'react-virtuoso'
import VirtualGrid from 'react-responsive-virtual-grid'
import {ColumnSizer, Grid } from "react-virtualized";
import jsondata from './assets/sum.json'
import testUtils from 'react-dom/test-utils';
import { render } from '@testing-library/react';

const spinner = <span><CircularProgress style={{'color': 'yellow'}}/></span>;

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

function Layout({ setLocale }) {

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  const [btn,setbtn]=useState(false)
  const [width, height] = useWindowSize();
  const [componentwidth,setwidth]=useState()
  const [size, setSize] = useState([0, 0]);
  const [datas,setdata]=useState([]);
  const [rtl, setRtl] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [image, setImage] = useState(true);
  const [toggled, setToggled] = useState(false);
  const [loading ,setloading] = useState(false);
  const [filterdata,setfilter]=useState([])
  const [newarray,setnew]=useState([])
  const [column,setcolumn]=useState(4)
  const [columnCount,setcolumncount]=useState(2222)
  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  useEffect(()=>{
    // setcolumn(parseInt(width/220))
    if(width<770)
    {
      setwidth(width)
    }
    else if(width>770) setwidth(width-270)
    // setcolumn(parseInt((width-270)/220))
  },[width])
  useEffect(()=>{
    if(componentwidth<200) setcolumn(0)
    else if(componentwidth>200&&componentwidth<400) {setcolumn(1);setcolumncount(8888)}
    else if(componentwidth>400&&componentwidth<600) {setcolumn(2);setcolumncount(4444)}
    else if(componentwidth>600&&componentwidth<800) {setcolumn(3);setcolumncount(2965)}
    else if(componentwidth>800&&componentwidth<1000) {setcolumn(4);setcolumncount(2222)}
    else if(componentwidth>1000&&componentwidth<1200) {setcolumn(5);setcolumncount(1778)}
    else if(componentwidth>1200&&componentwidth<1400) {setcolumn(6);setcolumncount(1482)}
    else if(componentwidth>1400&&componentwidth<1600) {setcolumn(7);setcolumncount(1270)}
    else if(componentwidth>1600&&componentwidth<1800) {setcolumn(8);setcolumncount(1111)}
    else if(componentwidth>1800&&componentwidth<2000) {setcolumn(9);setcolumncount(988)}
  },[componentwidth])
  const handleRtlChange = (checked) => {
    setRtl(checked);
    setLocale(checked ? 'ar' : 'en');
  };
  const handleImageChange = (checked) => {
    setImage(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };
  useEffect(async ()=>{
    setbtn(false)
    let a=[]
      if(filterdata.length==0)
      {
        await setnew(jsondata.slice(0,8888));
        return;
      }
    else{
      console.log('filter')
      for(let i =0;i<jsondata.length;i++)
      {
        for(let j=0;j<filterdata.length;j++)
        {
          if(jsondata[i].attributes[parseInt(filterdata[j][0])-1].value==filterdata[j][1])
            await a.push(jsondata[i])
        }
      }
    }
    setnew(a)
      console.log(a.length)
      
  },[filterdata])

  useEffect(()=>{
    setnew(jsondata.sort((a,b)=>(parseFloat(a.rank)>parseFloat(b.rank))?1:-1))
  },[])
  
  const forceUpdate = useForceUpdate();

  function filtering(data){
    setfilter(data)
  }
  function search(id){
    setbtn(true)
    setdata(jsondata.filter(data=>{return data.id==id}))
  }
   function sort(sortopt){
    switch(sortopt){
      case('Idl2h'):
        setnew(jsondata.sort((a,b)=>(parseInt(a.id)>parseInt(b.id))?1:-1))  
        break;
      case('Idh2l'):
         setnew(jsondata.sort((a,b)=>(parseInt(a.id)>parseInt(b.id))?-1:1))
        break;
      case('Rankl2h'):
        setnew(jsondata.sort((a,b)=>(parseFloat(a.rank)>parseFloat(b.rank))?1:-1))
        break;
      case('Rankh2l'):
        setnew(jsondata.sort((a,b)=>(parseFloat(a.rank)>parseFloat(b.rank))?-1:1))
        break;
    }
    forceUpdate()
    console.log(newarray)
  }
  // function renderRow({index}) {
  //   return (
  //     <Whale data={index}/>
  //   );
  // }

  // const columnWidth = 210;
  // const defaultHeight =220;
  // const defaultWidth = columnWidth;
  
  // const cache = new CellMeasurerCache({
  //   defaultHeight,
  //   defaultWidth,
  //   fixedWidth: true
  // })

  // const cellPositioner = createMasonryCellPositioner({
  //   cellMeasurerCache: cache,
  //   columnCount: 1,
  //   columnWidth,
  //   spacer: 27
  // })
  // function cellRenderer ({ index, key, parent, style }) {
  //   const datum = newarray[index]
  
  //   const height = columnWidth  ||  defaultHeight ;
  
  //   return (
  //     <CellMeasurer
  //       cache={cache}
  //       index={index}
  //       key={key}
  //       parent={parent}
  //     >
  //       <Whale data={datum}/>
  //     </CellMeasurer>
  //   )
  // }

  
  const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    return (
      <div key={key} style={style}>
          <Whale data={newarray[rowIndex*column+columnIndex]}/>
      </div>
    );
  };

  const Item = ({ style, index, scrolling, readyInViewport }) => (
    <div style={{ backgroundColor: 'gainsboro', ...style }}>
      <Whale data={newarray[index]}/>
    </div>
  )
  

  return (
    
    <div className={`app ${rtl ? 'rtl' : ''} ${toggled ? 'toggled' : ''}`}>
      <Aside
        image={image}
        collapsed={collapsed}
        rtl={rtl}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        filtering={filtering}
        search={search}
        sort={sort}
      />
      
       <Loader show={loading} message={spinner}>
        <main className='main'>
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
              <FaBars />
            </div> 
           {btn? <div className='list-container'>
                {
                  datas.map(data=>{
                    return(<Whale data={data}/>)
                  })
                }
            </div>:<Grid
              cellRenderer={cellRenderer}
              columnCount={column}
              columnWidth={210}
              height={height}
              rowCount={columnCount}
              rowHeight={220}
              width={componentwidth}
              data={newarray}
            />
           }
            {/* <Masonry
            cellCount={newarray.length}
            cellMeasurerCache={cache}
            cellPositioner={cellPositioner}
            cellRenderer={cellRenderer}
            height={1000}
            width={1320} */}

          {/* /> */}
            {/* <VirtuosoGrid
              listClassName="list-container"
              totalCount={newarray.length}
              overscan={200}
              components={ newarray.map(data=>{
                return(<Whale data={data}/>)
              })}
              style={{
                height: "170px",
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
              }}
              /> */}
            {/* <VirtualizedItemGrid
            className="my-grid-class"
              idealItemWidth={newarray.length}
              items={newarray}
              renderItem={renderRow}
            /> */}
            {/* <List
              width={300}
              height={800}
              rowHeight={50}
              rowRenderer={renderRow}
              rowCount={newarray.length} /> */}
{/*               
            <div className='list-container'>
                {
                  newarray.map(data=>{
                    return(<Whale data={data}/>)
                  })
                }
            </div> */}
            {/* <Grid
              ref={registerChild}
              columnWidth={getColumnWidth}
              columnCount={numColumns}
              height={someCalculatedHeight}
              cellRenderer={someCellRenderer}
              rowHeight={50}
              rowCount={numRows}
              width={adjustedWidth}
            /> */}
          </main>
          {/* <VirtualGrid
            total={newarray.length}
            cell={{ height: 220, width: 210 }} // `width` is a `minWidth`, because the grid is reponsive
            child={cellRenderer}
            viewportRowOffset={10} // 5 on top, 5 on bottom
            onRender={children => console.log(children)} // maybe useful callback
          /> */}
      </Loader>
    </div>
  );
}

export default Layout;
