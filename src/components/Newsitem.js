import { Component } from "react";
// import logo from '../logo.svg';

// export default class Newsitem extends Component{
    const Newsitem = (props)=>{
// render(){

        let {title,description,newsUrl,image , newsContent} = props;
        return (
            <div>
                <div className="card" >
                    <img src={image} className="card-img-top" alt="img"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <h4>{newsContent}...</h4>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {props.author} at {props.updateTime}</small></p>
                        <a href={newsUrl} target="_munna" className="btn btn-dark">Know More</a>
                    </div>
                </div>
            </div>
        )
    // }
}

export default Newsitem