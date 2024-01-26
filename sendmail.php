<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require './phpmailer/src/Exception.php';
require './phpmailer/src/SMTP.php';
require './phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com'; // TODO: Here you need to specify the data of our Qazdev SMTP server
    $mail->Port = 587;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; 
    $mail->SMTPAuth   = true;
    $mail->Username   = 'arzhanovmaxim@gmail.com'; // TODO: Here you need to specify the auth data of our Qazdev SMTP server
    $mail->Password   = 'ouyvceqqueaqyslp'; // TODO: Here you need to specify the auth data of our Qazdev SMTP server

    $mail->setFrom('arzhanovmaxim@gmail.com', 'Maxim Arzhanov'); // TODO: Here you need to specify the data of sender
    $mail->addAddress('arzhanovmaxim@gmail.com');

    $mail->isHTML(true);
    $mail->Subject = 'Application for training';

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $course = $_POST['proga-lang'];

    $body = "
        <h2>Заявка на обучениe</h2>
        <b>Имя:</b> $name<br>
        <b>Номер телефона:</b> $phone<br>
        <b>Курс:</b> $course
    ";

    $mail->Body = $body;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}