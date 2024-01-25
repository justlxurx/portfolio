<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->isHTML(true);

$mail->setFrom('justlxurx0@gmail.com', 'developer');
$mail->addAddress('justlxurx0@gmail.com');

$mail->Subject = 'Hi. this is a program of the programmer';

$body = '<h1>Заявка на обучения</h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['phone']))){
    $body.='<p><strong>Номер телефона :</strong> '.$_POST['phone'].'</p>';
}
if(trim(!empty($_POST['proga-lang']))){
    $body.='<p><strong>Курс :</strong> '.$_POST['proga-lang'].'</p>';
}

$mail->Body = $body;

// if(!$mail->send()){
//     $message = 'error';
// }
// else{
//     $message = 'data sended';
// }

$response  =['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
