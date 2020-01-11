
                        Follow for BE tour

1 - TABLE


        KEY              META                      TYPE       
|          |                          |             |
| id       | primary                  | integer     |
| username | unique, notNull          | string      |
| password | notNull, min(5), max(56) | string      |


2 - AXIOS Path && Schema                
                        Login

    post('/auth/login')     //req.body = login_schema

                        Schema

{
    "username":"",  //the required username for whom you want to login
    "password":""   //the required password for whom you want to login
}


after login you should get a token, in response.data whatever you call your axios return 

3 - TOKEN format    

    {
        "confirm":"Log in Success!",
        "token":"whatever random token it gave you...."
    }
 


4 - REGISTER Paths & Schema 


    post('/auth/register')     //req.body = register_schema

                Schema

{
    "username":"",  //the required username for whom you want to register
    "password":""   //the required password for whom you want to register
}
after a succesful register you should be able to log into the app with your information! remember on Login to save that Token! 


JOKE SCHEMA's


----- these are the endpoints used for Jokes

----- Jokes --- Public

    '/api/jokes'

----- will return all the PUBLIC tagged Jokes


-----  BELOW HERE REQUIRES TOKEN IN HEADER FOR AUTHORIZATION 



----- Jokes --- ALL

    '/api/jokes/all'

----- will return all Jokes


-----  addJoke


    '/api/jokes/:username'

----- requires the following schema as body

{
    "question":"",   //Required
    "answer":"",    //Required
    "public":false
}



----- saveJoke


    '/api/jokes/:username/:joke_id'




----- delJoke


    '/api/jokes/:joke_id'



----- editJoke


    '/api/:joke_id'

----- requires the following schema as body
{
    "question":"",   //Required
    "answer":"",    //Required
    "public":false
}


