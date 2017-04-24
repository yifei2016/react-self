import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


let result1 = {
	title: "JavaScript Tutorial - W3Schools",
	url: "https://www.w3schools.com/js/",
	description: "JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced."
}
let result2 = {
	title: "JavaScript | MDN",
	url: "https://developer.mozilla.org › MDN › Web technology for developers",
	description: "28 mars 2017 - JavaScript ® (ofta förkortat till JS ) är ett lättvikt, direkt tolkat, objekt-orienterat språk med first-class functions , mest känt som scriptspråk för ..."
}
let list = [result1, result2];

class ThreeSearchResult extends React.Component{
  render(){
    const newList = this.props.list.map(element =><SearchResult key={element.title} item={element} /> )
    return (
      <ol>{newList}</ol>
    )
  }
}dfdfdfdf
class SearchResult extends React.Component{
  render(){
    return (
      <li >
      <a href={this.props.item.url}>{this.props.item.title}</a> <br/>
      <span>{this.props.item.description}</span>
      </li>
    )
  }
}

ReactDOM.render(
  <ThreeSearchResult list={list}></ThreeSearchResult>,
  document.getElementById("root")
)

export default ThreeSearchResult;
