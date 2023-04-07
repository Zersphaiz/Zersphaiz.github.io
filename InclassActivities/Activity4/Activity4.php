<!DOCTYPE html>
<html>
<div>
<body>
  
<h1>Registration Form</h1>

<form action="Activity4-preview.php" method="POST">
<div>
    <table>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" value="" style="vertical-align: left; margin: 50px;" ><br>
</div>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" value="" style="vertical-align: left; margin: 24px;" ><br>
<div>
  <label for="pwd">Password:</label>
  <input type="password" id="pwd" name="pwd" minlength="8" style="vertical-align: left; margin: 24px;"> <br>
</div>
  <label for="Address">Address:</label>
  <input type="text" id="address" name="address" value=""style="vertical-align: left; margin: 35px;"><br>
<div>
  <label for="country">Country:</label>
  <select name="country" style="vertical-align: left; margin: 30px;">
    <option value="Country: Not provided">(Please select a country)</option>
    <option value="Turkey">Turkey</option>
    <option value="USA">USA</option>
    <option value="England">England</option>
    <option value="Germany">Germany</option>
    <option value="Belgium">Belgium</option>
    <option value="Greece">Greece</option>
    <option value="Italy">Italy</option>
    <option value="Spain">Spain</option>
    <option value="Portugal">Portugal</option>
  </select><br>
</div>
  <label for="zip">ZIP Code:</label>
  <input id="zip" name="zip" type="number" style="vertical-align: left; margin: 24px;"><br>
<div>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" style="vertical-align: left; margin: 40px;"><br>
</div>
  <label for="sex">Sex:</label>
  <input type="radio" id="Male" name="sex" value="Male" style="margin-right: 0;">
  <label for="Male">Male</label>
  <input type="radio" id="Female" name="sex" value="Female" style="margin-right: 0">
  <label for="Female">Female</label><br>
<div>
  <label for="language">Language:</label>
  <input type="checkbox"id="English" name="language[]" value="English" style="margin-right: 0">
  <label for="english">English</label>
  <input type="checkbox"id="French" name="language[]" value="French" style="margin-right: 0">
  <label for="french">French</label>
  <input type="checkbox"id="Germany" name="language[]" value="Germany" style="margin-right: 0">
  <label for="germany">Germany</label><br>
</div>
  <label for="about">About:</label>
  <textarea id="about" name="about" rows="4" cols="22" style="vertical-align: left; margin: 40px;"></textarea><br>
  <div>
  <input type="submit" value="Submit">
  </div> 
  
  </form>
  


</table> 
</body>
</div> 
</html>

