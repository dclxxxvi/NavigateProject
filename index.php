<!--
    $host = "localhost";
    $user = "32bCfKX290";
    $password = "7kLEtE9yty";
    $db_name = "32bCfKX290";

    $connect = mysqli_connect($host, $user, $password, $db_name);
    if(!$link) {
        die('Соединение не удалось: Код ошибки: '.mysqli_connect_errno().' - '.mysqli_connect_error());
        }

    if(!mysqli_set_charset($link, "utf8")) {
        die('Ошибка при загрузке набора символов utf8: '.mysqli_errno($link);' - '.mysqli_error($link));
        }
 -->