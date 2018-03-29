import React from 'react'
import ArtistView from './artist-views'


//import AtristView from './artist-view.jsx'

export default class ArtistSerch extends React.Component {

    constructor(props){
        super(props)
        this.state = { 
            data: [] 
        }
        
        this.searchArt = this.searchArt.bind(this)
    }

    // 実行後のコントローラーの取得される値がおかしかったのでAjaxを移行
    
    searchArt(e){
        fetch(
            CreateLang(this.refs.inputText.value),
            { method: 'GET' }
        )
            .then(res => {
                return res.json()
            })
            .then(d => {
                this.setState( { data: d.results } )
            })
            .catch(e => {
                console.log("fetch 失敗したよ")
                console.log(e)
            })
    }

    render(){
        return (
            <div>
                <label>
                    検索
                    <input type="text" name="artist" ref="inputText" />
                </label>
                <input type="submit" onClick={this.searchArt} />
                <ArtistView items={this.state.data} />
            </div>
        )
    }

}

// <ArtistsView items={this.state.data.results} />

// 空白処理は自動でやってくれるらしい（あっちで）
const BASE_URL = 'https://itunes.apple.com/search'
const CreateLang = (data) => {
    return BASE_URL + "?term=" + data + "&limit=25&entity=album"
}

