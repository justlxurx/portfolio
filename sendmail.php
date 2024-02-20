<?php

require __DIR__ . '/vendor/autoload.php';
// include_once __DIR__ . '/unsorted/accept.php';

if(isset($_POST['phone'])) {

  try {
    
      // Создание клиента
      $subdomain = 'devpracticekz';            // Поддомен в амо срм
      $login     = 'devpracticekz@gmail.com';            // Логин в амо срм
      $apikey    = '3ade789ac8ea81d879df4f6023c717487e6c730c';            // api ключ


      $amo = new \AmoCRM\Client($subdomain, $login, $apikey);

        // Вывести полученые из амо данные
        // echo '<pre>';
        // print_r($amo->account->apiCurrent());
        // echo '</pre>';

        // создаем лида
        $lead = $amo->lead;
        $lead['name'] = $_POST['product_name'];
        // $lead['responsible_user_id'] = 2462338; // ID ответсвенного 
        // $lead['pipeline_id'] = 1207249; // ID воронки

        // $lead->addCustomField(305117, [ // ID  поля в которое будт приходить заявки
        //     [$_POST['city']], // сюда вписать значение из атрибута "name" пример: <input name="phone">
        // ]);

        $id = $lead->apiAdd();

      // Получение экземпляра модели для работы с контактами
      $contact = $amo->contact;

      // Заполнение полей модели
      $contact['name'] = isset($_POST['name']) ? $_POST['name'] : 'Не указано';
      $contact['linked_leads_id'] = [(int)$id];

      $contact->addCustomField(642213, [
            [$_POST['phone'], 'MOB'],
        ]);

        $contact->addCustomField(304033, [
            [$_POST['email'], 'PRIV'],
        ]);

        $contact->addCustomField(1195345, [
            [$_POST['proga-lang']],
        ]);

      // Добавление нового контакта и получение его ID
      $id = $contact->apiAdd();


  } 
  catch (\AmoCRM\Exception $e) {
      printf('Error (%d): %s' . PHP_EOL, $e->getCode(), $e->getMessage());
  }

}
