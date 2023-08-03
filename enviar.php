<?php

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

ini_set('display_errors', 1);
error_reporting(E_ALL);

// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $nombre = $_POST["nombre"];
//     $email = $_POST["email"];
//     $mensaje = $_POST["mensaje"];

//     // Configura la dirección de correo a la que deseas enviar los mensajes
//     $destinatario = "EarthyLeaves2023@gmail.com";

//     // Asunto del correo
//     $asunto = "Mensaje de contacto de $nombre";

//     // Cuerpo del correo
//     $cuerpo = "Nombre: $nombre\n";
//     $cuerpo .= "Email: $email\n";
//     $cuerpo .= "Mensaje:\n$mensaje\n";

//     // Encabezados del correo
//     $headers = "From: $email\r\n";
//     $headers .= "Reply-To: $email\r\n";

//     // Envía el correo
//     mail($destinatario, $asunto, $cuerpo, $headers);

//     // Redirecciona al usuario a una página de confirmación o agradecimiento
//     header("Location: Agradecimiento.html");
//     exit;}
//     else {
//         echo "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.";
//     }

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Cargar las clases de PHPMailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instanciar PHPMailer
$mail = new PHPMailer();

// Configurar el modo de depuración (0 = sin mensajes de depuración, 2 = mensajes de depuración)
$mail->SMTPDebug = 0;

// Configurar el protocolo SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;

// Configurar los detalles del servidor de correo
$mail->Host = 'smtp.gmail.com'; // Puedes usar 'smtp.gmail.com' si utilizas Gmail
$mail->Username = 'EarthyLeaves2023@gmail.com'; // Tu dirección de correo
$mail->Password = 'EarthyLeaves2023'; // Tu contraseña de correo
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Opciones: 'ssl', 'tls', o dejar en blanco para ninguna encriptación
$mail->Port = 587; // Puerto para TLS: 587 (o 465 para SSL)

// Configurar el remitente y destinatario
$mail->setFrom('ronielquintero14@gmail.com', 'Tu Nombre');
$mail->addAddress('EarthyLeaves2023@gmail.com', 'Nombre Destinatario');

// Configurar el contenido del mensaje
$mail->isHTML(true); // Habilitar contenido HTML en el mensaje
$mail->Subject = 'Asunto del correo';
$mail->Body = 'Este es el contenido del mensaje en formato HTML. <strong>Hola Mundo!</strong>';
$mail->AltBody = 'Este es el contenido del mensaje en texto plano en caso de que no se muestre HTML. Hola Mundo!';

// Enviar el correo
if ($mail->send()) {
    echo 'Correo enviado exitosamente';
} else {
    echo 'Error al enviar el correo: ' . $mail->ErrorInfo;
}



?>
