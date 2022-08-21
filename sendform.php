<?php
$name = trim($_POST['name_user']);
$phone = trim($_POST['tel']);
$email = trim($_POST['email']);
$subject = trim($_POST['subject']);

$fromMail = 'info@gmail.com'; //Почта отправителя (в домене почты должен быть адрес вашего сайта)
$fromName = 'Поступила заявка с сайта'; //Заголовок письма
$emailTo = 'eziz282@gmail.com'; //Ваша почта
$subject = 'Форма обратной связи site.com';
$subject = '=?utf-8?b?' . base64_encode($subject) . '?=';
$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
$headers .= "From: " . $fromName . " <" . $fromMail . "> \r\n";

// Содержимое письма 
$body = "Получено письмо с сайта \n Имя: $name\nТелефон: $phone\Почта: $email";

// сообщение будет отправлено в случае, если поле с номером телефона не пустое 
if (strlen($phone) > 0) {
    $mail = mail($emailTo, $subject, $body, $headers, '-f' . $fromMail);
    return;
}
