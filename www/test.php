
<html><body>
<?
if(file_exists("/home/hesa/xnee_devel.dat"))
{
  echo "in here<br>";
  $exist_file = fopen("/home/hesa/xnee_devel.dat", "r");
  $new_count = fgets($exist_file, 255);
  $new_count=$new_count+1;
  print("$new_count people have visited this page<br>");
  fclose($exist_file);
  print("$new_count people have visited this page<br>");
  print("$new_count people have visited this page<br>");
  
  $exist_count = fopen("/home/hesa/xnee_devel.dat", "w");
  fputs($exist_count, $new_count);
  fclose($exist_count);
}
else
{
  $new_file = fopen("/home/hesa/xnee_devel.dat", "w");
  fputs($new_file, "1");
  print("1 person have visited this page");
  fclose($new_file);
}
?>



</body>
</html>
