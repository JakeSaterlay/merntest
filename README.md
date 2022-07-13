# Mern Example Project
This project is a basic example of the MERN stack

# Config
This project requires a `config.json` file in the root of the server folder.

`{
	"mongodbusername": "Your Mongo Db Username Here",
	"mongodbpassword": "Your Mongo Db Password Here"
}
`

# Mongo Db Structure
The project also requires a collection called "teams" which takes the following structure:
```	
  name: {
	  type: String,
	  required: true,
	},
  points: {
	  type: Number,
	  required: true,
	},
  description: {
	  type: String,
	  required: true,
	}
```
