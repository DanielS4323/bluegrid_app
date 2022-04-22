export const notEmpty = (value) => {
    let val = value.trim()

    if(val.length < 1) {
        return true
    } 
    return false
};

export const validateEmail = (value) => {
    let email = value.trim()
    
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
   
}