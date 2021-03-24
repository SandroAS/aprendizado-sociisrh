<?php

/*$array = array(
    "Geracoes" => array(
        "Perdida" => array(
            "Inicio" => "1883",
            "Final" => "1900",
        ),
        "Grandiosa" => array(
            "Inicio" => "1901",
            "Final" => "1924",
        ),
        "Silenciosa" => array(
            "Inicio" => "1926",
            "Final" => "1942",
        ),
        "BabyBoomeres" => array(
            "Inicio" => "1943",
            "Final" => "1964",
        ),
        "GeracaoX" => array(
            "Inicio" => "1965",
            "Final" => "1979",
        ),
        "GeracaoY" => array(
            "Inicio" => "1980",
            "Final" => "1995",
        ),
        "GeracaoZ" => array(
            "Inicio" => "1996",
            "Final" => "2010",
        ),
        "Alfa" => array(
            "Inicio" => "2011",
            "Final" => "2025",
        )
    )   
);*/

$array = [
    ['Perdida','1883', '1900'],
    ['Grandiosa','1901', '1924'],
    ['Silenciosa','1926', '1942'],
    ['BabyBoomeres','1943', '1964'],
    ['Gerações X','1965', '1979'],
    ['Gerações Y','1980', '1995'],
    ['Gerações Z','1996', '2010'],
    ['Alfa','2011', '2025']
];

echo json_encode($array);

//$fallback = 'index.php';
//$anterior = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : $fallback;

//header("location: {$anterior}");
//exit;

?>