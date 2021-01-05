<?php
$arrayOfInput = file ("input1.txt");
foreach ($arrayOfInput as $number1) {
  foreach ($arrayOfInput as $number2) {
    foreach ($arrayOfInput as $number3) {
      $result = (intval ($number1) + intval ($number2) + intval ($number3));
      if ($result === 2020) {
        echo "<li>".$number1."+". $number2."+". $number3. "=". $result. "</li>";
        echo "answer = ". $number1 * $number2 * $number3;
      }
    }
  }
}
?>
