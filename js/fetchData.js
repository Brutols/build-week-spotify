export {fetchData};

  const fetchData = async (method,id,data) => {

    const url = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=elthon_john'
    
    let  options = {
         method: "GET",
         headers: {
            'Content-Type': 'application/json',
                },
        }

        data ? options.body = JSON.stringify(data) : null

        try{
            let resp = await fetch(url,options)
            if (resp.status >= 200 && resp.status < 300){

                console.log('Request successfully done');
                let data = await resp.json()
                return data

            } else {
                throw new Error('Something wrong');
            }
        }
        catch(error) {console.log(error)};
};