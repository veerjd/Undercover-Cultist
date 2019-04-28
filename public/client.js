let domainName;
let clientID;
let addBotLink;
const domainNameTitle = document.getElementById("domain-name-title");
const addBotCopy = document.getElementById("add-bot-link");


const oauthUrl = document.getElementById("oauth_url");
oauthUrl.style.display = "none";

const no-client-found = document.getElementById("no-client-found");

function getDomain() {
  console.log("test");
  return fetch("/clientid/")
    .then(res => res.json())
    .then(resJson => {
      if (resJson.error) {
        console.log(resJson.error);
      } else {
        domainName = resJson.domain;
        clientID = resJson.client;

        console.log("domain name " + domainName);
        domainNameTitle.innerHTML = domainName;
        if (clientID) {
          addBotLink= "https://discordapp.com/api/oauth2/authorize?client_id="+clientID+"&permissions=0&scope=bot"
          oauthUrl.value = addBotLink;
          oauthUrl.style.display = "block";

        } else {
          
          
        
        }

      }
      return Promise.resolve();
    });
}

getDomain();

/*function monitor(){
  console.log("test");
 return fetch("/monitor/")
    .then(res => res.json())
    .then(resJson => {
      if (resJson.error) {
                console.log(resJson.error);

      } else {
        console.log(resJson.message);
      }
      return Promise.resolve();
    });
}


setInterval(monitor, 60 * 1000);*/


