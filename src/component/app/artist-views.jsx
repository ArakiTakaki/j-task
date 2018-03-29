import React from 'react'

export default class ArtistView extends React.Component{
    render(){
        console.log(this.props.items)
        var data = this.props.items

        var list = [];
        // 普通の拡張for文使えたらしい。
        for(var rec of data){
            list.push(
                <div key={rec.collectionId}>
                    <h3>{rec.collectionId}</h3>
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