<!DOCTYPE html>
<html>
<body>
  
<h1>Preview</h1>
<?php

$name=$_POST['name'];
$username=$_POST['username'];
$password=$_POST['pwd'];
$address=$_POST['address'];




if(empty($name)==false)
{
    echo $_POST ['name'];
}
else{
    echo "Name: Not provided\n";
}
echo "\n";

if(empty($username)==false)
{
    echo $_POST ['username'];
}
else{
    echo "Username: Not provided\n";
}
echo "\n";

if(empty($password)==false)
{
    echo $_POST ['pwd'];
}
else{
    echo "Password: Not provided\n";
}
echo "\n";

if(empty($address)==false)
{
    echo $_POST ['address'];
}
else{
    echo "Address: Not provided\n";
}
echo "\n";

if(empty($_POST['country'])==false)
{    
    echo "".$_POST['country'];
}
else{
   echo "Country: Not provided\n";
}
echo "\n";

if(empty($_POST['zip'])==false)
{    
    echo "".$_POST['zip'];
}
else{
   echo "ZIP Code: Not provided\n";
}
echo "\n";

if(empty($_POST['email'])==false)
{    
    echo "".$_POST['email'];
}
else{
   echo "Email: Not provided\n";
}
echo "\n";

if(empty($_POST['sex'])==false)
{    
    echo "".$_POST['sex'];
}
else{
   echo "Sex: Not provided\n";
}
echo "\n";

if(empty($_POST['language'])==true)
{    
    echo "Language: Not provided\n";
}
else{
   for($i=0;$i<sizeof($_POST["language"]);$i++)
   {
    echo $_POST["language"][$i]."<br>";
   }
}
echo "\n";

if(empty($_POST['about'])==false)
{    
    echo "".$_POST['about'];
}
else{
   echo "About: Not provided\n";
}
echo "\n";




?>



</body>
</html>

