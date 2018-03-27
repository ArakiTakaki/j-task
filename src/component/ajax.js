// ajax
// # stat
// URL      : 対象となるURL
// callback : データを渡したいメソッド
// data     : JSON形式でデータを渡す
export default function(url,callback){
    fetch(url, { method: 'GET' })
        .then(res => {
            return res.json()
        })
        .then(d => {
            callback(d)
        })
        .catch(e => {
            console.log("fetch 失敗したよ")
            console.log(e)
        })
}