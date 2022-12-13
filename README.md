
# Sahayata






## Deployment

To deploy this project run

```bash
  npm install

  npm start
  
  node index.js
```


## Documentation

Html, CSS and JS have been used in the project to design the frontend. Templating has been
done using EJS(Embedded javascript), which is able to dynamically generate HTML pages. The
figure below shows the home page of our website. This is where everything about this website
have been defined including the way one can contact us. This page displayes various options
about which you may have your complaint. The user can proceed further by selecting the type of
complaint he wants to register . For eg. if the user has some complaint regarding wooden
furniture, he/she may click on Carpenter and proceed to the next page.

                        USER-SIDE
![f](https://user-images.githubusercontent.com/64221944/207420560-9ccc8c39-e716-4b23-b34b-cc70c64a5315.png)

The user now lands on the page where he/she is required to enter various details about
himself/herself , the type of complaint they want to register, their name,hostel assigned , room
number, phone number, entry number, and any other additional thoughts that they may have
regarding the complaint.

![g](https://user-images.githubusercontent.com/64221944/207420570-192df60d-e5cb-41e2-8c10-e9c83aa9297b.png)

![h](https://user-images.githubusercontent.com/64221944/207420580-5b6f2945-2b12-4c6f-9073-43c145443b76.png)

After all the details are filled , user can press the submit button and so the query gets submitted
and so the responsible authorities can access the complaints through admin login portal.

![i](https://user-images.githubusercontent.com/64221944/207420594-e0e5a26b-2465-4f36-a929-93922c9422ec.png)

                            ADMIN-SIDE

![j](https://user-images.githubusercontent.com/64221944/207421682-132a4ea8-56f6-4584-b03b-ac40bc1cbb3f.png)

The concerned authorities can land on this page and enter the credentials that has been provided
by the website and after entering correct credentials , they can gain access to the complaints that
has been there in their respective domains/hostels. The next page will look something as below
where the complaints will be displayed in a tabular manner with all the details filled by the
students.

![k](https://user-images.githubusercontent.com/64221944/207421688-4256eb32-3134-47fd-9c79-8fe650c797e0.png)

                            DATABASE
This is the database that has been created which stores all the information filled by
the users in the pages above and keep a record of all the details that has been input
The name of our Database is googlesheetsdb which consists of two collectionssahayata_records and users.
Sahayata_records contains all the queries that has been entered by the users so
that the concerned authorities can gain access to those details.
Users contains credentials of the admin users .

![l](https://user-images.githubusercontent.com/64221944/207421692-251e5120-ac12-4b80-ac9f-e99a67489380.png)
                    
                    Collection-sahayata_records
![m](https://user-images.githubusercontent.com/64221944/207421699-e1aab7ac-ae43-4304-811a-1716bc4998d1.png)



                        Collection-user
![n](https://user-images.githubusercontent.com/64221944/207421705-4df2c136-e55e-4924-8718-88b7c0a848d9.png)

## TECHNOLOGIES
The basic software requirements required for building the website:
For client-side scripting:

● HTML is used to write basic source code

● CSS is used in our website for design and layout

● JavaScript which provides functionality to our website

● jQuery is a javascript framework that we have used

● bootstrap which is a framework for css.

● Typeform templating to gather data.

For server-side scripting:

● Node.js for writing our server.

● Express which is a framework for node.js is extensively used.

● EJS is used to dynamically render our html and css page.

● Mongodb which is used for creating the database of the site.

● Googlesheets which is used to store information from the form.
