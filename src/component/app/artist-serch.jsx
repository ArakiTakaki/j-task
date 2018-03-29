import React from 'react'
import ArtstsCont from './artist-controller.jsx'


//import AtristView from './artist-view.jsx'

export default class ArtistSerch extends React.Component {

    constructor(props){
        super(props)
        this.state = { 
            textValue: "" , 
            isSerch: false, 
            url: "" 
        }
        
        this.searchArt = this.searchArt.bind(this)
    }

    // 新しく作成する場合bindしてやらないと動作しないらしい
    // onChange={this.changeText}
    searchArt(e){
        this.setState( { textValue: this.refs.inputText.value})
        this.setState( { isSerch: true } )
    }

    render(){
        return (
            <div>
                <label>
                    検索
                    <input type="text" name="artist" ref="inputText" />
                </label>
                <input type="submit" onClick={this.searchArt} />

                {(() => {
                    console.log(this.state.textValue)
                    if (this.state.isSerch) {
                        return <ArtstsCont artistName={this.state.textValue} />
                    }
                })()}
            </div>
        )
    }

}

// <ArtistsView items={this.state.data.results} />

