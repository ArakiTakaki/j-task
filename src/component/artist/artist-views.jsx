import React from 'react'

export default class ArtistView extends React.Component{
    render(){
        console.log(this.props.items)
        var data = this.props.items
        var list = [];
        for(var rec of data){
            list.push(
                // 整っている構造体はちゃんとKeyをつけよう。
                <div key={rec.collectionId}>
                    <h2>{rec.collectionName}</h2>
                    <p>{rec.artistName}</p>
                    <img src={rec.artworkUrl100} alt={rec.collectionName} />   
                </div>
            );
        }

        return (
            <div>
                {list}
            </div>
        )

    }
}