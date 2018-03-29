import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

// routing用
import Home from './home.jsx'
import Albam from './albam.jsx'
import Serch from './app/artist-serch.jsx'
// routing用

import links from './routing-links.json' 

console.log(links)


export default class Nav extends Component {
   

    render() {
        return (
            //とりあえずルーティングする場合はこんな感じらしい。
            <BrowserRouter>
                <nav>    
                    
                    <Links routing={links} />
                    <Route exact path='/' component={Home} />
                    <Route path='/albam' component={Albam} />
                    <Route path='/serch' component={Serch} />
                </nav>
            </BrowserRouter>
        );
    }
    
}


const Links = (props) =>(
    <ul>
        {props.routing.map(
            (item) => {
                return <li key={item.URL}><Link to={item.URL}>{item.Name}</Link></li>;
            }
        )}
    </ul>
)




//exactが初期値？
//https://itunes.apple.com/search?key1=value1&key2=value2&key3=value3
//
//Jack Johnson の名前で検索する場合とリミット句（抜いたら全件表示）
//https://itunes.apple.com/search?term=jack+johnson&limit=25
//
//Jack Johnson のすべてのアルバムをルックアップする場合:
//https://itunes.apple.com/lookup?id=909253&entity=album
//entity=album