const express 	= require('express');
const sampleUser = { name: "David"};
// spin up Express instance:
const app 		= express();

// serve static files from dist folder
app.use(express.static("dist"));
app.use("/api/getUserName", (req,res) => 
	res.send({ username: sampleUser.name})
	);

// spin up server on port 8080
app.listen(8080, () => console.log("listening on port 8080"));