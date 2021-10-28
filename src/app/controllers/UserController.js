
export default {
  async store(request, response){
    const {name, email, password} = request.body


    // response object
    const user = {
      name,
      email,
      password
    }


    // sending an email by using the lib, and the fake smtp server

    // await makes it stop until the mail is send, then it returns something


    
   


  
    // to send the json response

    return response.json(user)
  }
}