module.exports = {
...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

function createLoginTracker(userInfo) {
  userInfo.username = "user1"
  userInfo.password = "password123"
  
    let attemptCount = 0
      return (passwordAttempt) => {
         attemptCount++;
         
         if (passwordAttempt === userInfo.password) {
          return "Login successful";
         } else if (passwordAttempt !== userInfo.password && attemptCount <= 3) {
          return `Attempt ${attemptCount}: Login failed`;
         }else if (passwordAttempt !== userInfo.password && attemptCount > 3) {
          return "Account locked due to too many failed login attempts";
         }
        }
      }

       
      
//         //if (attemptCount > 3) {
//           return "Your account is locked due to many failed attempts";
//         } else if (passwordAttempt === userInfo.password) {
//           return "Your login was successful";
//         } else {
//           return `Incorrect password. ${3-attemptCount} attempt(s) remaining`;
//         } 
//       };
     
// 
