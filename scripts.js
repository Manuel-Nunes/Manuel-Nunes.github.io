function githubLogin(){
    window.location= "https://github.com/login/oauth/authorize?client_id=1c97f106b422ceb10c61&redirect_uri=http://127.0.0.1:5500/index.html";
}

function  getLoginInfo(){
    const searchInfo = new window.URLSearchParams(window.location.search);
    const tempCode = searchInfo.get("code")
    console.log(tempCode)
    var requestOptions = {
        method: 'POST',
        redirect: 'follow',
        mode:"no-cors"
    };
      
    fetch(`https://github.com/login/oauth/access_token?client_id=1c97f106b422ceb10c61&client_secret=0fb369720022fb03b1ef883d38692cbeedc929be&code=${tempCode}`, 
    requestOptions)
    .then(
        resp => resp.json() // this returns a promise
    ).then(repos => {
        for (const repo of repos) {
            console.log(repo.name);
        }
    }).catch(ex => {
        console.error(ex);
    })
}  