import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Ajax from './ajax'

import Home from './home.jsx'
import Albam from './albam.jsx'

export default class Nav extends Component {
    constructor(props){
        super(props)
        // stateの生成
        this.state = { textValue: ""}
        this.changeText = this.changeText.bind(this);
    }

    // 新しく作成する場合bindしてやらないと動作しないらしい
    // onChange={this.changeText}
    changeText(event){
        this.setState( { textValue: event.target.value} )
    }

    render() {
        return (
            //とりあえずルーティングする場合はこんな感じらしい。
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to='/'>全体</Link></li>
                        <li><Link to='/albam'>アルバム</Link></li>
                        <li><input type="text" value={this.state.textValue} onChange={this.changeText} /></li>
                    </ul>
                    <Route exact path='/' component={Home} />
                    <Route path='/albam' component={Albam} />
                </nav>
            </BrowserRouter>
        );
    }
    
}




// Ajaxテスト
const debug = (data) =>(
    console.log(data)
)
Ajax(
    'https://itunes.apple.com/search?term=jack+johnson&limit=25',
    debug
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