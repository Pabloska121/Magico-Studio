<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'vendor/autoload.php';

// Captura y sanitiza datos del formulario
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'magicostudioprueba@gmail.com';
    $mail->Password = 'sylp mimz mimj bmlr'; 
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Remitente y destinatario
    $mail->setFrom($email, $name);
    $mail->addAddress('magicostudioprueba@gmail.com');

    // Contenido del correo
    $mail->isHTML(true);
    $mail->Subject = 'Nuevo mensaje de contacto';
    $mail->Body    = $message;

    // Enviar el correo
    $mail->send();

    // Redirigir a la página de agradecimiento
    header('Location: agradecimiento.html');
    exit; // Asegura que el script se detenga después de la redirección
} catch (Exception $e) {
    // En caso de error, también redirige a la página de agradecimiento (opcionalmente podrías redirigir a una página de error)
    header('Location: agradecimiento.html');
    exit; // Asegura que el script se detenga después de la redirección
}
?>
