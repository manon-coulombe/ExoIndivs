<?php
$arrayOfInput = file ("input3.txt");
//print_r ($arrayOfInput);

$count1 = 0;
$count2 = 0;
$count3 = 0;
$count4 = 0;
$count5 = 0;
$x1 = 0;
$x2 = 0;
$x3 = 0;
$x4 = 0;
$x5 = 0;

foreach ($arrayOfInput as $key => $value) {
  $place = $value[$x1%31];
  if ($place == '#') {
    $count1++;
  }
  $x1++;
}
echo $count1. "<br>";

foreach ($arrayOfInput as $key => $value) {
  $place = $value[$x2%31];
  if ($place == '#') {
    $count2++;
  }
  $x2+=3;
}
echo $count2. "<br>";

foreach ($arrayOfInput as $key => $value) {
  $place = $value[$x3%31];
  if ($place == '#') {
    $count3++;
  }
  $x3+=5;
}
echo $count3. "<br>";

foreach ($arrayOfInput as $key => $value) {
  $place = $value[$x4%31];
  if ($place == '#') {
    $count4++;
  }
  $x4+=7;
}
echo $count4. "<br>";

foreach ($arrayOfInput as $key => $value) {
  if ($key%2 == 0) {
    $place = $value[$x5%31];
    if ($place == '#') {
      $count5++;
    }
    $x5++;
  }
}
echo $count5. "<br>";

echo $count1*$count2*$count3*$count4*$count5
?>
