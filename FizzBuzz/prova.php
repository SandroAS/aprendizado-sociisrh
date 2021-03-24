<?php

for ($value = 1; $value <= 99; $value++) {

    if($value % 3 == 0 
    && $value % 5 == 0 
    && ($value % 10 == 3 
    || intdiv($value, 10) == 3 
    || $value % 10 == 5 
    || intdiv($value, 10) == 5)){ 

        echo "lucky";
        echo "<br>";

    } elseif($value % 3 == 0 
    && $value % 5 == 0 
    && $value % 10 <> 3 
    && intdiv($value, 10) <> 3 
    && $value % 10 <> 5 
    && intdiv($value, 10) <> 5){   

        echo "fizzbuzz";
        echo "<br>";

    } elseif($value % 3 == 0 
    && ($value % 10 == 3 
    || intdiv($value, 10) == 3)){   

        echo "fizz fizz";
        echo "<br>";

    } elseif($value % 5 == 0 
    && ($value % 10 == 5 
    || intdiv($value, 10) == 5)){   

        echo "buzz buzz";
        echo "<br>";

    } elseif($value % 10 == 5 
    || intdiv($value, 10) == 5){   

        echo "buzz";
        echo "<br>";

    } elseif($value % 5 == 0){   

        echo "buzz";
        echo "<br>";

    } elseif($value % 10 == 3 
    || intdiv($value, 10) == 3){   

        echo "fizz"; 
        echo "<br>";

    } elseif($value % 3 == 0){   

        echo "fizz"; 
        echo "<br>";

    } else{

        echo $value;
        echo "<br>";

    }
}
exit;
?>