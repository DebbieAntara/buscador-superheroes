<?php

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . '/config.php';

if (!defined('SUPERHERO_TOKEN') || empty(SUPERHERO_TOKEN)) {
    http_response_code(500);
    echo json_encode([
        'response' => 'error',
        'error' => 'Token no configurado en el servidor.'
    ]);
    exit;
}

if (!isset($_GET['name']) || trim($_GET['name']) === '') {
    http_response_code(400);
    echo json_encode([
        'response' => 'error',
        'error' => 'Debes enviar el parámetro name.'
    ]);
    exit;
}

$name = trim($_GET['name']);
$apiUrl = 'https://superheroapi.com/api/' . SUPERHERO_TOKEN . '/search/' . rawurlencode($name);

$ch = curl_init($apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 15);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

$result = curl_exec($ch);

if (curl_errno($ch)) {
    http_response_code(500);
    echo json_encode([
        'response' => 'error',
        'error' => 'Error al conectar con SuperHero API: ' . curl_error($ch)
    ]);
    exit;
}

$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

http_response_code($httpCode ?: 200);
echo $result;