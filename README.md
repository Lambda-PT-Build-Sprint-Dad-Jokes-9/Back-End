
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