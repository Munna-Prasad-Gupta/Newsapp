import { Component ,useEffect,useState} from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


// export default class News extends Component{
    // article = [
    //     {
    //       "source": { "id": null, "name": "CNBC" },
    //       "author": "Jonathan Vanian",
    //       "title": "HPE hacked by same Russian intelligence group that hit Microsoft - CNBC",
    //       "description": "Hewlett Packard Enterprise said that its cloud-based email system was compromised by the state-sponsored actor known as Cozy Bear, which also hacked Microsoft.",
    //       "url": "https://www.cnbc.com/2024/01/24/hpe-hit-by-russian-intelligence-group-that-hacked-microsoft.html",
    //       "urlToImage": "https://image.cnbcfm.com/api/v1/image/107356386-1704840785525-gettyimages-978863380-HPE_NERI.jpeg?v=1706132822&w=1920&h=1080",
    //       "publishedAt": "2024-01-24T21:39:42Z",
    //       "content": "Hewlett Packard Enterprise said Wednesday that its cloud-based email system was compromised by the Russian state-sponsored hacking group known as Midnight Blizzard or Cozy Bear.\r\nThe enterprise tech … [+2079 chars]"
    //     },
    //     {
    //       "source": { "id": "cnn", "name": "CNN" },
    //       "author": "Jacqueline Howard",
    //       "title": "FDA warns of secondary cancer risk tied to CAR-T therapies that treat cancer - CNN",
    //       "description": "The US Food and Drug Administration has issued a new warning about the possible risk of secondary cancers in cancer patients who have been treated with a form of immunotherapy called chimeric antigen receptor T-cell, or CAR-T cell, therapy.",
    //       "url": "https://www.cnn.com/2024/01/24/health/fda-car-t-therapies-secondary-cancer-risk/index.html",
    //       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240116185604-fda-sign-011624.jpg?c=16x9&q=w_800,c_fill",
    //       "publishedAt": "2024-01-24T21:36:00Z",
    //       "content": "The US Food and Drug Administration has issued a new warning about the possible risk of secondary cancers in cancer patients who have been treated with a form of immunotherapy called chimeric antigen… [+6208 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "Yahoo Entertainment" },
    //       "author": "Pras Subramanian",
    //       "title": "Tesla stock drops on Q4 earnings miss, warns production growth rate will be 'notably lower' than 2023 - Yahoo Finance",
    //       "description": "Tesla reported Q4 earnings after the bell on Wednesday, Jan. 24.",
    //       "url": "https://finance.yahoo.com/news/tesla-stock-drops-on-q4-earnings-miss-warns-production-growth-rate-will-be-notably-lower-than-2023-212357382.html",
    //       "urlToImage": "https://s.yimg.com/ny/api/res/1.2/CDqCKqZN19CUnesJ.v6F5g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-01/1a8b7ab0-ba07-11ee-9fdd-7de4564f72d3",
    //       "publishedAt": "2024-01-24T21:23:57Z",
    //       "content": "Tesla reported Q4 earnings that missed estimates and issued a downbeat full-year production outlook that weighed on the stock, continuing a downtrend for the EV maker that began at the start of the y… [+4188 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "CNBC" },
    //       "author": "Alex Harring, Hakyung Kim",
    //       "title": "Nasdaq, S&P 500 close higher for fifth straight day as Netflix shares surge: Live updates - CNBC",
    //       "description": "Stocks rose Wednesday after Netflix reported its subscriber count reached a new record in the fourth quarter.",
    //       "url": "https://www.cnbc.com/2024/01/23/stock-market-today-live-updates.html",
    //       "urlToImage": "https://image.cnbcfm.com/api/v1/image/107363047-1706024202827-gettyimages-1953262654-ms2_3162_mkgqjv1z.jpeg?v=1706024283&w=1920&h=1080",
    //       "publishedAt": "2024-01-24T21:18:00Z",
    //       "content": "The S&P 500 rose Wednesday as Netflix led a broader rally among technology names, pushing the broader market to new heights.\r\nThe benchmark S&P 500 eked out a gain of 0.08% to 4,868.55, clinc… [+2041 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "CNBC" },
    //       "author": "Jordan Novet",
    //       "title": "IBM shares rise after earnings top estimates in ‘uncertain, volatile’ economy - CNBC",
    //       "description": "IBM ended the year with more than $11 billion in free cash flow, more than it had been projecting, due to acceleration in distributed infrastructure.",
    //       "url": "https://www.cnbc.com/2024/01/24/ibm-q4-earnings-report-2023.html",
    //       "urlToImage": "https://image.cnbcfm.com/api/v1/image/107363351-1706044412958-gettyimages-1623988565-INDIA_B20_SUMMIT.jpeg?v=1706044517&w=1920&h=1080",
    //       "publishedAt": "2024-01-24T21:09:23Z",
    //       "content": "IBM shares rose as much as 8% in extended trading Wednesday after the tech and services provider announced fourth-quarter results that exceeded Wall Street's expectations.\r\nHere's how the company did… [+2788 chars]"
    //     },
    //     {
    //       "source": { "id": "cnn", "name": "CNN" },
    //       "author": "Brian Fung",
    //       "title": "Amazon’s Ring to shutter video-sharing program popular with police - CNN",
    //       "description": "Amazon’s Ring will no longer let police and other government agencies request doorbell camera footage from within the company’s Neighbors app, in what privacy advocates are hailing as a long-awaited victory for civil liberties.",
    //       "url": "https://www.cnn.com/2024/01/24/tech/amazons-ring-video-sharing-with-police/index.html",
    //       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1678212268.jpg?c=16x9&q=w_800,c_fill",
    //       "publishedAt": "2024-01-24T21:08:00Z",
    //       "content": "Amazons Ring will no longer let police and other government agencies request doorbell camera footage from within the companys Neighbors app, in what privacy advocates are hailing as a long-awaited vi… [+5588 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "The Points Guy" },
    //       "author": "Erica Silverstein",
    //       "title": "First impressions of Royal Caribbean's Icon of the Seas, the new largest ship in the world - The Points Guy",
    //       "description": "Everyone can find something to like on board, whether it's the stunning shows, the thrill rides, the ocean-facing pools, the creative craft cocktails or the dining variety.",
    //       "url": "https://thepointsguy.com/guide/icon-of-the-seas-first-impressions/",
    //       "urlToImage": "https://thepointsguy.global.ssl.fastly.net/us/originals/2024/01/20240122_Royal-Caribbean_Icon-of-the-Seas_ESilverstein_111.jpg",
    //       "publishedAt": "2024-01-24T21:02:52Z",
    //       "content": "TPG's Erica Silverstein accepted a free trip from Royal Caribbean to sail its newest ship, Icon of the Seas. The opinions expressed below are entirely hers and weren't subject to review by the line.\r… [+18603 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "YouTube" },
    //       "author": null,
    //       "title": "Boeing CEO meeting with senators to discuss latest plane incidents - CBS News",
    //       "description": "Boeing CEO Dave Calhoun is on Capitol Hill Wednesday to meet with senators who have questions about the latest mechanical issues and incidents involving Boei...",
    //       "url": "https://www.youtube.com/watch?v=2-1MBeuJQ4c",
    //       "urlToImage": "https://i.ytimg.com/vi/2-1MBeuJQ4c/maxresdefault.jpg",
    //       "publishedAt": "2024-01-24T21:02:44Z",
    //       "content": null
    //     },
    //     {
    //       "source": { "id": null, "name": "Turn to 10" },
    //       "author": "JESSICA A. BOTELHO | The National Desk",
    //       "title": "Stinky situation: Farting passenger on plane allegedly causes flight to turn around - KOMO News",
    //       "description": "A gassy man apparently caused a big stink aboard an American Airlines fight, according to a viral social media post.",
    //       "url": "https://turnto10.com/news/offbeat/stinky-situation-farting-passenger-on-plane-allegedly-causes-flight-to-turn-around-gas-tooting-smell-american-airlines-flying-traveling-swearing-disruptive-smell-reddit-user-phoenix-arizona-austin-texas",
    //       "urlToImage": "https://komonews.com/resources/media/65809d33-61ce-4a0d-8536-2db7656d49d6-large16x9_AP24005650221625.jpg",
    //       "publishedAt": "2024-01-24T20:48:38Z",
    //       "content": "A gassy man apparently caused a big stink aboard an American Airlines fight, according to a viral social media post.\r\nThe plane eventually turned around and the passenger was asked to get off the pla… [+2446 chars]"
    //     },
    //     {
    //       "source": { "id": "the-verge", "name": "The Verge" },
    //       "author": "Emilia David",
    //       "title": "Joe Biden's big AI science project gets pledges from Microsoft, Nvidia and others - The Verge",
    //       "description": "The National AI Research Resource pilot stems from Biden’s executive order on AI, directing government agencies to provide access to AI research centers.",
    //       "url": "https://www.theverge.com/2024/1/24/24049467/national-science-foundation-ai-research-biden-eo",
    //       "urlToImage": "https://cdn.vox-cdn.com/thumbor/Ee_G4u5fxlmLJhGptIdd2WSR6zM=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/13292775/acastro_181017_1777_brain_ai_0003.jpg",
    //       "publishedAt": "2024-01-24T20:36:41Z",
    //       "content": "Joe Bidens big AI science project gets pledges from Microsoft, Nvidia and others\r\nJoe Bidens big AI science project gets pledges from Microsoft, Nvidia and others\r\n / The National Artificial Intellig… [+3694 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "YouTube" },
    //       "author": null,
    //       "title": "Bitcoin wrestles with $40,000 as it tries to recover recent losses: CNBC Crypto World - CNBC Television",
    //       "description": "CNBC Crypto World features the latest news and daily trading updates from the digital currency markets and provides viewers with a look at what’s ahead with ...",
    //       "url": "https://www.youtube.com/watch?v=nUdbGEaL90c",
    //       "urlToImage": "https://i.ytimg.com/vi/nUdbGEaL90c/maxresdefault.jpg",
    //       "publishedAt": "2024-01-24T20:04:41Z",
    //       "content": null
    //     },
    //     {
    //       "source": { "id": null, "name": "CNBC" },
    //       "author": "Jeff Cox",
    //       "title": "Thursday's GDP report expected to show U.S. economy at a crossroads - CNBC",
    //       "description": "The consensus outlook for the fourth quarter is that gross domestic product grew at a 2% seasonally adjusted annualized pace.",
    //       "url": "https://www.cnbc.com/2024/01/24/thursdays-gdp-report-expected-to-show-the-us-economy-at-a-crossroads.html",
    //       "urlToImage": "https://image.cnbcfm.com/api/v1/image/107356825-1704907588628-gettyimages-1843520618-AFP_347R2NK.jpeg?v=1706121927&w=1920&h=1080",
    //       "publishedAt": "2024-01-24T19:37:25Z",
    //       "content": "Economic growth likely slowed to its weakest pace in a year and a half to end 2023, possibly setting the stage for a more pronounced slowdown ahead, according to Wall Street economists.\r\nThe consensu… [+3395 chars]"
    //     },
    //     {
    //       "source": { "id": "cnn", "name": "CNN" },
    //       "author": "Faith Karimi",
    //       "title": "Colorado pastor Eli Regalado accused of cryptocurrency fraud - CNN",
    //       "description": "Last April a Denver pastor launched a cryptocurrency, INDXcoin, with sales pitches filled with prayer and quotes from the Bible. Now he and his wife are accused of pocketing $1.2 million from investors and spending much of it on jewelry, cosmetic dentistry, l…",
    //       "url": "https://www.cnn.com/2024/01/24/us/colorado-pastor-crypto-fraud-cec/index.html",
    //       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240123160351-eli-regalado-indxcoin-01192024.jpg?c=16x9&q=w_800,c_fill",
    //       "publishedAt": "2024-01-24T19:08:00Z",
    //       "content": "Denver pastor Eli Regalado had an exciting message for his congregation.\r\nAfter months of prayers and cues from God, he was going to start selling cryptocurrency, he announced in a YouTube video last… [+5187 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "WCVB Boston" },
    //       "author": "Kelley Kosuda",
    //       "title": "Rossen Reports: Do you qualify for free tax help? - WCVB Boston",
    //       "description": "The FTC issued a final order, saying Intuit used deceptive advertising techniques promoting TurboTax as a free service when it isn’t free for everyone.",
    //       "url": "https://www.wcvb.com/article/rossen-reports-do-you-qualify-for-free-tax-help/46523366",
    //       "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/screenshot-2024-01-24-111751-65b159f4a0e47.jpg?crop=0.992xw:1.00xh;0.00481xw,0&resize=1200:*",
    //       "publishedAt": "2024-01-24T18:44:00Z",
    //       "content": "The FTC issued a final order, saying Intuit used deceptive advertising techniques promoting TurboTax as a free service when it isnt free for everyone. In the aftermath of this, many of you are asking… [+1345 chars]"
    //     },
    //     {
    //       "source": { "id": "usa-today", "name": "USA Today" },
    //       "author": "Emily DeLetter",
    //       "title": "Chipotle hiring for 19,000 jobs, workers to staff 2024 burrito season - USA TODAY",
    //       "description": "Chipotle Mexican Grill says burrito season, from March to May, is its busiest time of year, and is looking to hire 19,000 employees.",
    //       "url": "https://www.usatoday.com/story/money/food/2024/01/24/chipotle-hiring-19000-workers/72338389007/",
    //       "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/10/02/USAT/2505dc32-b1ac-48f7-986a-81114da7e8f8-USATSI_20997896.jpg?crop=4031,2268,x0,y604&width=3200&height=1801&format=pjpg&auto=webp",
    //       "publishedAt": "2024-01-24T18:35:41Z",
    //       "content": "Ahead of what the company is calling its \"burrito season,\" Chipotle Mexican Grill is offering additional benefits to workers and is looking to hire 19,000 new employees.\r\nIn addition to hiring the 19… [+1398 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "Yahoo Entertainment" },
    //       "author": "Alexandra Canal",
    //       "title": "Wall Street applauds Netflix earnings as stock soars — but not everyone is bullish - Yahoo Finance",
    //       "description": "Here's what Wall Street analysts had to say following Netflix's impressive fourth quarter earnings report.",
    //       "url": "https://finance.yahoo.com/news/wall-street-applauds-netflix-earnings-as-stock-soars--but-not-everyone-is-bullish-181515149.html",
    //       "urlToImage": "https://s.yimg.com/ny/api/res/1.2/tK5c_8aBVnZEWqATkQ8i9Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-01/e4a0fd20-baca-11ee-b4f7-79b8bb3260f9",
    //       "publishedAt": "2024-01-24T18:15:15Z",
    //       "content": "Netflix (NFLX) shares surged double digits on Wednesday, climbing as much as 14%, after the streaming giant reported strong fourth quarter earnings with subscribers topping 13 million.\r\nRevenue beat … [+6944 chars]"
    //     },
    //     {
    //       "source": { "id": "cnn", "name": "CNN" },
    //       "author": "Nicole Goodkind, Elisabeth Buchwald",
    //       "title": "Microsoft is worth more than $3 trillion. It’s the second company to ever break that threshold - CNN",
    //       "description": "Microsoft became the second-ever company worth $3 trillion on Wednesday as the artificial intelligence boom sent shares of the company’s stock soaring higher.",
    //       "url": "https://www.cnn.com/2024/01/24/investing/microsoft-three-trillion-market-value/index.html",
    //       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1540327850.jpg?c=16x9&q=w_800,c_fill",
    //       "publishedAt": "2024-01-24T18:02:00Z",
    //       "content": "Microsoft became the second-ever company worth $3 trillion on Wednesday as the artificial intelligence boom sent shares of the companys stock soaring higher.\r\nFor comparison, Microsofts market value … [+1953 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "YouTube" },
    //       "author": null,
    //       "title": "As China's Economy Stumbles, Jack Ma Makes a Bigger Bet on Alibaba | Vantage with Palki Sharma - Firstpost",
    //       "description": "As China's Economy Stumbles, Jack Ma Makes a Bigger Bet on Alibaba | Vantage with Palki SharmaAs China's economic decline continues, and stock markets witnes...",
    //       "url": "https://www.youtube.com/watch?v=Odau72CepL4",
    //       "urlToImage": "https://i.ytimg.com/vi/Odau72CepL4/maxresdefault.jpg",
    //       "publishedAt": "2024-01-24T18:00:18Z",
    //       "content": null
    //     },
    //     {
    //       "source": { "id": null, "name": "Fox Business" },
    //       "author": "Greg Norman",
    //       "title": "Ford recalls nearly 2 million Explorers over trim part that could detach, create road hazard - Fox Business",
    //       "description": "Ford is recalling nearly 2 million Explorer SUVs between model years 2011 and 2019 over concerns about a part that could fly off while driving.",
    //       "url": "https://www.foxbusiness.com/markets/ford-recalls-2-million-explorers-trim-part-could-detach-create-road-hazard",
    //       "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/01/0/0/Ford-Explorer-1.png?ve=1&tl=1",
    //       "publishedAt": "2024-01-24T17:50:00Z",
    //       "content": "Ford has issued a recall of nearly 2 million of its Explorer SUVs over concerns that a piece of exterior trim located near their windshields could detach and create a road hazard for other drivers.  … [+1991 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "Fox Business" },
    //       "author": "Chris Pandolfo",
    //       "title": "Developer pitches plans for tallest building in US in unlikely city - Fox Business",
    //       "description": "Real estate developer Matteson Capital says Oklahoma City is \"experiencing a significant period of growth,\" which makes it the ideal place to build the tallest building in the U.S.",
    //       "url": "https://www.foxbusiness.com/fox-news-us/developer-pitches-plans-tallest-building-us-unlikely-city",
    //       "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2024/01/0/0/oklahoma-city-skyline.jpg?ve=1&tl=1",
    //       "publishedAt": "2024-01-24T17:24:00Z",
    //       "content": "An ambitious real estate developer has announced plans to build what would be the tallest building in the U.S. in unlikely Oklahoma City.\r\nMatteson Capital, a firm based in California, announced last… [+3571 chars]"
    //     }
      
    //   ];
   
    // static defaultProptypes ={
    //   country:"in",
    //   pageSize: 10,
    //   category:"general"
    // }

    const News = (props)=>{

      //using useState instead of class component this.state
      const [articles,setArticles]=useState([]);
      const [loading,setLoading]=useState(true);
      const [page,setPage]=useState(1);
      const [totalResults,setTotalResults]=useState(0);
      
      // constructor(){
      //     super();
      //     console.log('hello from news component');
      //     this.state ={
      //         articles:[],
      //         loading:true,
      //         page:1,
      //         totalResults:0
      //     }

    

    // }

    async function updateUrl(){
      props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey={props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      setLoading(true);
      // this.setState({loading:true});
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      console.log(parsedData);
      props.setProgress(70);
      setArticles(parsedData.articles);
      setLoading(false);
      setTotalResults(parsedData.totalResults);
      // this.setState({
      //   articles:parsedData.articles,
      //   loading:false,
      //   totalResults:parsedData.totalResults
        
      // });
      props.setProgress(100);
    }

    //instead of componentDidMount() we use useEffect

    useEffect(()=>{
      document.title = `${props.category} - All time News`
      updateUrl();
    },[])
    
    // async function componentDidMount(){
    //   // console.log('cdm');
    //     // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey={props.apiKey}&page=${this.state.page}&pageSize=${props.pageSize}`;
    //     // this.setState({loading:true});
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json();
    //     // console.log(parsedData);
    //     // this.setState({
    //     //   articles:parsedData.articles,
    //     //   loading:false,
    //     //   totalResults:parsedData.totalResults
    
    //     // });
    //     // // console.log(this.setState);
    //     // console.log('done it');
        
    //     // this.updateUrl();
    //   }

    const handleNext = async ()=>{
      console.log('next');
      // if(!this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize )){
        
      // }else{
      // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey={props.apiKey}&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
      //   this.setState({loading:true})
      //   let data = await fetch(url);
      //   let parsedData = await data.json();
      //   console.log(parsedData);
      //   this.setState({
      //     articles:parsedData.articles,
      //     loading:false,
      //     page:this.state.page + 1
    
        // });
      // }

      setPage(page + 1);
      // this.setState({
      //   page:this.state.page + 1
      // })
      updateUrl();
      // this.updateUrl();
    }

    const handlePrevious = async ()=>{
      console.log('previous');
      // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey={props.apiKey}&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
      //   this.setState({loading:true});
      //   let data = await fetch(url);
      //   let parsedData = await data.json();
      //   console.log(parsedData);
      //   this.setState({
      //     articles:parsedData.articles,
      //     loading:false,
      //     page:this.state.page - 1,
      //     pageSize:20
    
      //   });
      setPage(page - 1);
      // this.setState({
      //   page:this.state.page - 1
      // })
      updateUrl();
      // this.updateUrl();
    }

    const fetchMoreData = async() => {
      // this.setState({
        //   page:this.state.page + 1})
        
        
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey={props.apiKey}&page=${page +1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        setLoading(true);
        // this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles));
        setLoading(false);
        setTotalResults(parsedData.totalResults);
        // this.setState({
        //   articles:this.state.articles.concat(parsedData.articles),
        //   // loading:false,
        //   totalResults:parsedData.totalResults
    
        // });
      
    };

    // render(){
      // console.log('rendering first then cdm');
        return (
            <>
                <h2 className="text-center">All time news {props.heading}</h2>
                {loading && <Spinner/>}
                {/* {this.state.loading && <Spinner/>} */}
                <InfiniteScroll
                    dataLength={articles.length}
                    // dataLength={this.state.articles.length}
                    next={fetchMoreData}
                    // next={this.fetchMoreData}
                    hasMore={articles.length < totalResults}
                    // hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<Spinner/>}
                  >
                    <div className="container my-3">
                        <div className="row">
                            { articles.map((element)=>{
                                return(
                            // { this.state.articles.map((element)=>{
                            //     return(
                            <div className="col-md-4" key = {element.url}>
                                <Newsitem  title ={element.title?element.title.slice(0,40):""} author={element.author?element.author:"Prasad"} updateTime={element.publishedAt} description ={element.description?element.description.slice(0,40):""} image = {element.urlToImage?element.urlToImage:"https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/25_01_2024_11_07_01_7621505.webp?width=920&format=jpeg"} newsUrl = {element.url} newsContent ={element.content?element.content.slice(0,25):""}/>
                            </div>
                            )})}
                            
                        </div>
                </div>
                </InfiniteScroll>
                {/* <div className="d-flex justify-content-between my-3">
                <button type="button" disabled={this.state.page <=1} onClick={this.handlePrevious} className="btn btn-dark">&larr; Previous</button>
                <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} onClick={this.handleNext} className="btn btn-dark">Next &rarr;</button>
                </div> */}
            </>

        )
    // }
}

News.defaultProptypes ={
  country:"in",
  pageSize: 10,
  category:"general"
}

// static.propTypes = {
//   country: PropTypes.string.isRequired,
//   pageSize: PropTypes.number.isRequired,
//   category: PropTypes.string.isRequired
// };

News.propTypes = {
  country: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired
};

export default News