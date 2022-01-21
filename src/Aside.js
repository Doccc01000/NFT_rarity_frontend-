import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaDatabase,  FaTwitter, FaDiscord, FaRegLaughWink, FaSortAmountDownAlt ,FaHome} from 'react-icons/fa';
import sidebarBg from './assets/bg2.jpg';
import MultipleSelectCheckmarks from './checkmark'

let Foreground=[[9,"Crypto",'429'],
              [9,"Energy",'710'],
              [9,"Fashion & Retail",'993'],
              [9,"Finance & Investments",'910'],
              [9,"Healthcare",'1048'],
              [9,"Manufacturing",'960'],
              [9,"Media & Entertainment",'924'],
              [9,"Real Estate",'922'],
              [9,"Restaurant",'1337'],
              [9,"Technology",'654'],
            ]
let left=[[1,"no item",'2655'],
          [1,"Beaded Bracelet",'1316'],
          [1, "Cartier Bracelet",'452'],
          [1, "Diamond Watch",'238'],
          [1, "Gold Bracelet",'462'],
          [1, "Paracord Bracelet",'1343'],
          [1, "Whalex",'109'],
          [1, "Rosary Bracelet",'525'],
          [1, "Smartwatch",'1787']]
let right= [ [2,"no item",'2215'],
             [2,"Diamond",'219'], 
             [2,"Trident",'143'], 
             [2,"Money",'676'], 
             [2,"Money Bag",'716'], 
             [2,"Paint Brush",'843'], 
             [2,"Pointer",'898'], 
             [2,"Poker Chip",'476'], 
             [2,"Smartphone",'1339'], 
             [2,"Wallet",'1362']]
let neck=[[3,"no item",'3496'], 
          [3,"Bow Tie",'1081'], 
          [3,"Diamond-Necklace",'466'], 
          [3,"Cross necklace",'894'],  
          [3,"Gold Medal",'355'], 
          [3,"Link Necklace",'544'], 
          [3,"Necktie",'1082'], 
          [3,"Pearl necklaces",'437'], 
          [3,"Red Scarf",'532']]
let head=[[4,"no Hat",'2690'], 
          [4,"Army Hat",'268'], 
          [4,"Aviator Hat",'385'], 
          [4,"Beret",'401'], 
          [4,"Boater Hat",'271'], 
          [4,"Bowler Hat",'250'], 
          [4,"Bucket Hat",'368'], 
          [4,"Cowboy Hat",'360'], 
          [4,"Crown",'103'], 
          [4,"Devil Horns",'129'], 
          [4,"Fedora",'353'], 
          [4,"Fisherman's Hat",'433'], 
          [4,"Graduation Hat",'244'], 
          [4,"Halo",'105'], 
          [4,"Beach headphones",'163'], 
          [4,"Party Hat",'275'], 
          [4,"Pirate's Hat",'294'], 
          [4,"Red Cap",'250'], 
          [4,"Sailor's Hat",'351'], 
          [4,"Sombrero",'269'], 
          [4,"Top Hat",'296'], 
          [4,"Whale Spout",'368'], 
          [4,"Witch Hat",'261']]
let eyeacc=[[5,"no item",'1739'], 
            [5,"3D Glasses",'241'], 
            [5,"Aviator Glasses",'880'], 
            [5,"Eye Patch",'638'], 
            [5,"Hollywood Glasses",'614'], 
            [5,"Oval Glass",'804'], 
            [5,"Sting Rays",'596'], 
            [5,"Round Sunglass",'642'], 
            [5,"Sports Sunglass",'801'], 
            [5,"Thug Life Glass",'127'], 
            [5,"Wayfarer glasses",'840'], 
            [5,"Prescription Glasses",'965']]
let eye=[[6,"Angry",'1371'], 
          [6,"Cross Eyed",'830'], 
          [6,"Happy",'1777'], 
          [6,"Standard",'2223'], 
          [6,"Stoned",'1329'], 
          [6,"Bug Eyed",'1357']]    
let mouth=[ [7,"Big Smile",'1317'], 
            [7,"Coin Bite",'569'], 
            [7,"Biting Diamond",'176'], 
            [7,"Biting Fish",'695'], 
            [7,"Bubble Gum",'490'], 
            [7,"Cigar",'517'], 
            [7,"Diamond teeth",'264'], 
            [7,"Gold Teeth",'455'], 
            [7,"One Gold Tooth",'98'], 
            [7,"Lollipop",'516'], 
            [7,"Biting Red Fish",'705'], 
            [7,"Smile",'1233'], 
            [7,"Tobacco",'481'], 
            [7,"Tongue",'603'], 
            [7,"Vape",'534'], 
            [7,"Weed",'434']]
let body=[[8,"Alien Green",'250'], 
          [8,"Black",'355'], 
          [8,"Black Camo",'813'], 
          [8,"Blue",'697'], 
          [8,"Brown",'530'], 
          [8,"Diamond",'179'], 
          [8,"Gold",'181'], 
          [8,"Gray",'728'], 
          [8,"Green",'548'], 
          [8,"Lava",'364'], 
          [8,"Ocean Sand",'367'], 
          [8,"Orange",'518'], 
          [8,"Pink",'489'], 
          [8,"Purple",'565'], 
          [8,"Rainbow",'266'], 
          [8,"Red",'521'], 
          [8,"Reptile",'325'], 
          [8,"Seaweed",'348'], 
          [8,"Yellow",'560'], 
          [8,"Zombie",'283']]
        
const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar,filtering ,search,sort}) => {

  function addfilter(string){
    filtering(string)
  }
  
  const intl = useIntl();
  const [searchid,setsearch]=useState();
  const [sortopt,setsortopt]=useState();

  function handleEntailmentRequest(e){
    searchbtn();
    e.preventDefault();
  }
  function searchbtn(){
    if(searchid!=null)
      search(searchid)
    else alert('no string')
  }

  useEffect(()=>{
    sort(sortopt)
  },[sortopt])

  return (
    <div className='sidebar'>
    <ProSidebar
      image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
      <div className='logodiv'><img className='logo' src="https://wealthywhaleclub.io/wp-content/uploads/2021/12/wwc-logo-w.png" /></div>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {intl.formatMessage({ id: 'sidebarTitle' })}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaHome />}
            // suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
          >
            <a href="https://wealthywhaleclub.com/#">{intl.formatMessage({ id: 'dashboard' })}</a>
          </MenuItem>
          <MenuItem
            // suffix={<span className="badge yellow">3</span>}
            title={intl.formatMessage({ id: 'withSuffix' })}
            icon={<FaRegLaughWink />}
          >
            <form>
                <input  class='searchinput' type="text" value={searchid} onChange={e => setsearch(e.target.value)}></input>
                <button  className='searchbtn' onClick={(e)=>{handleEntailmentRequest(e)}}>Check</button>
            </form>
          </MenuItem>
          <MenuItem icon={<FaSortAmountDownAlt />}> 
            {/* {intl.formatMessage({ id: 'sort' })}   */}
            <select class="cars" id="cars" onChange={(e)=>setsortopt(e.target.value)}>
              <option value="Idl2h">NFT ID : Low to High</option>
              <option value="Idh2l">NFT ID : High to Low</option>
              <option value="Rankl2h" selected>Rarity : High to Low </option>
              <option value="Rankh2l">Rarity : Low to High</option>
            </select>
          </MenuItem>      
             
  
          </Menu>
          <Menu iconShape="circle">
          <MenuItem icon={<FaDatabase />}> {intl.formatMessage({ id: 'components' })}</MenuItem>
          <SubMenu
            // prefix={<span className="badge gray">3</span>}
            title="Industry(10)"
          >
            <MenuItem><MultipleSelectCheckmarks  datas={Foreground} addfilter={addfilter}/></MenuItem>
          </SubMenu>
          <SubMenu
            // prefix={<span className="badge gray">3</span>}
            title="Left Fin Accessory(9)"
          >
            <MenuItem><MultipleSelectCheckmarks  datas={left} addfilter={addfilter}/></MenuItem>
          </SubMenu>
          <SubMenu
            // prefix={<span className="badge gray">3</span>}
            title="Right Fin Accessory(10)"
          >
            <MenuItem><MultipleSelectCheckmarks  datas={right} addfilter={addfilter}/></MenuItem>
          </SubMenu>
          <SubMenu
            // prefix={<span className="badge gray">3</span>}
            title="Neck Accessory(9)"
          >
            <MenuItem><MultipleSelectCheckmarks  datas={neck} addfilter={addfilter}/></MenuItem>
          </SubMenu>
          <SubMenu
            // prefix={<span className="badge gray">3</span>}
            title="Head Accessory(23)"
          >
            <MenuItem><MultipleSelectCheckmarks  datas={head} addfilter={addfilter}/></MenuItem>
          </SubMenu>
          <SubMenu
            // prefix={<span className="badge gray">3</span>}
            title="Eyes Accessory(12)"
          >
            <MenuItem><MultipleSelectCheckmarks  datas={eyeacc} addfilter={addfilter}/></MenuItem>
          </SubMenu>
          <SubMenu
            // prefix={<span className="badge gray">3</span>}
            title="Eyes(6)"
          >
            <MenuItem><MultipleSelectCheckmarks datas={eye} addfilter={addfilter}/></MenuItem>
          </SubMenu>
          <SubMenu
            // prefix={<span className="badge gray">3</span>}
            title="Mouth(16)"
          >
            <MenuItem><MultipleSelectCheckmarks  datas={mouth} addfilter={addfilter}/></MenuItem>
          </SubMenu>
          <SubMenu
            // prefix={<span className="badge gray">3</span>}
            title="Body(20)"
          >
            <MenuItem><MultipleSelectCheckmarks  datas={body} addfilter={addfilter}/></MenuItem>
          </SubMenu>
          {/* <SubMenu
            prefix={<span className="badge gray">3</span>}
            title={intl.formatMessage({ id: 'withPrefix' })}
            icon={<FaHeart />}
          >
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3</MenuItem>
          </SubMenu>
          <SubMenu title={intl.formatMessage({ id: 'multiLevel' })} icon={<FaList />}>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 1 </MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'submenu' })} 2 </MenuItem>
            <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3`}>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.1 </MenuItem>
              <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.2 </MenuItem>
              <SubMenu title={`${intl.formatMessage({ id: 'submenu' })} 3.3`}>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.1 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.2 </MenuItem>
                <MenuItem>{intl.formatMessage({ id: 'submenu' })} 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu> */}
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
          }}
        >
          <a
            href="https://discord.gg/wealthywhaleclub"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaDiscord />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {intl.formatMessage({ id: 'discord' })}
            </span>
          </a>
        </div>
        <div
          className="sidebar-btn-wrapper"
          style={{
          }}
        >
          <a
            href="https://twitter.com/wealthywhaleclb"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaTwitter />
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {intl.formatMessage({ id: 'twitter' })}
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
    </div>
  );
};

export default Aside;
