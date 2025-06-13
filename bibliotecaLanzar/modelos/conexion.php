<?php
// conexion.php: conexión a la base de datos
function conectar() {
  $host = 'localhost';
  $dbname = 'biblioteca';
  $usuario = 'root';
  $clave = '';

  try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $usuario, $clave);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
  } catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
  }
}
?>