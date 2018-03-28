import React from 'react'

export default class ArtistView extends React.Component{
    render(){
        console.log(this.props.items)
        var data = this.props.items

        var list = [];
        for(var i in data){
            list.push(
                <div>
                    <h2>{data[i].collectionName}</h2>
                    <p>{data[i].artistName}</p>
                    <img src={data[i].artworkUrl100} />     
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