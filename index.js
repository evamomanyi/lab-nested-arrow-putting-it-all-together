//module.exports = {
 // ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
//};

function createLoginTracker(userInfo) {
  userInfo.username = "user1"
  userInfo.password = "password123"
  
    let attemptCount = 0
      return (passwordAttempt) => {
         attemptCount++;
       
      
        if (attemptCount > 3) {
          return "Your account is locked due to many failed attempts";
        } else if (passwordAttempt === userInfo.password) {
          return "Your login was successful";
        } else {
          return `Incorrect password. ${3-attemptCount} attempt(s) remaining`;
        } 
      };
     
}


