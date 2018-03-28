import React from 'react'
import ArtistView from './artist-views'

export default class ArtstController extends React.Component {
    constructor(props){
        super(props)
        this.state = {data: [], isState: false}
    }

    componentWillMount(){

        fetch(
            CreateLang(this.props.url),
            { method: 'GET' }
        )
            .then(res => {
                return res.json()
            })
            .then(d => {
                this.setState( { data: d.results } )
                this.setState( { isState: true } )
            })
            .catch(e => {
                console.log("fetch 失敗したよ")
                console.log(e)
            })
    }

    render(){
        return(
            <div>
                <h1>アートワーク一覧</h1>
                {(() => {
                    if (this.state.isState) {
                        return <ArtistView items={this.state.data} />
                    } else {
                        return null
                    }
                })()}
            </div>
        )
    }
}

// 空白処理は自動でやってくれるらしい（あっちで）
const BASE_URL = 'https://itunes.apple.com/search'
const CreateLang = (data) => {
    return BASE_URL + "?" + "term=" + data + "&" + "limit=25"
}


