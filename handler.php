<?php
$username = htmlspecialchars($_POST['username']);
$userphone = htmlspecialchars($_POST['userphone']);

$token = "6390722480:AAFt8bwcszfWA337NRju7cTpuZzl58H1zvw";
$chat_id = "-4110129036";

$formData = array(
  "Клиент:" => $username
  "Телефон:" => $userphone
);

foreach ($formData as $key => $value){
  $text .= $key ."<b>" . $value . "</b>";
}

fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$text}&parse_mode=html", "r");