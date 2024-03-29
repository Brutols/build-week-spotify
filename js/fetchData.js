export {fetchData};

  const fetchData = async (urlFetch,query) => {

    const url = urlFetch+query
    
    let  options = {
         method: "GET",
         headers: {
            'Content-Type': 'application/json',
                },
        }
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