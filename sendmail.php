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
    $mail->Host       = 'mail.qazdev.kz'; // TODO: Here you need to specify the data of our Qazdev SMTP server
    $mail->Port = 587;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; 
    $mail->SMTPAuth   = true;
    $mail->Username   = 'test@qazdev.kz'; // TODO: Here you need to specify the auth data of our Qazdev SMTP server
    $mail->Password   = 'kL3Gg*W601'; // TODO: Here you need to specify the auth data of our Qazdev SMTP server

    $mail->setFrom('test@qazdev.kz', 'devpractice'); // TODO: Here you need to specify the data of sender
    $mail->addAddress('aa@qazdev.kz');

    $mail->isHTML(true);
    $mail->Subject = 'Application for training';

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $course = $_POST['proga-lang'];

    $body = "
        <h2>Application for training</h2>
        <b>Name:</b> $name<br>
        <b>Phone number:</b> $phone<br>
        <b>Course:</b> $course
    ";

    $mail->Body = $body;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
