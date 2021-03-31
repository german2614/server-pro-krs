//https://www.eclipse.org/paho/clients/js/

// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "german.chafla@unach.edu.ec",
    password: "German1",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("german.chafla@unach.edu.ec/sondeo");
    message = new Paho.MQTT.Message("HI WORLD");
    message.destinationName = "german.chafla@unach.edu.ec/sondeo";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  document.getElementById("sensor").innerHTML=message.payloadString;
	    }
function control(){	
	
	var datos = new Array(message.payloadString);
	for (var i=1; i<=10; i++){
		 datos[i] = message.payloadString;
	}
	document.write(datos);
	console.log(message.payloadString);
}
