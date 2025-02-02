module.exports = { 	
  name: 'card', 	
  description: 'card [number]', 	
  action: "sends card texture specified by it's number",
  note: "",
  legend: "number",
  execute(message, args) { 		
    
       if(args[0] == null){
        
        return message.channel.send(`NullPointerException: \`You must provide an argument\``);
      }
  
    
if(!isNaN(args[0]) && 0 < args[0] && args[0] < 119){
	
	message.channel.send("Card " + args[0],{
		files:["http://underhand.clanweb.eu/res/Card" + args[0] + ".png"]
	});
}else{
	return message.channel.send(`IllegalArgumentException: \`Number range should be in between 0-119 excluded\``);
	
	
} 	}, };