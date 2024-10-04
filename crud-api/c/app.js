console.log('linked')

async function fetchData(){
    await fetch("http://localhost:5000/users").then(res=>res.body).then(data=>console.log(data.values().next()))
    
}

await fetchData()

