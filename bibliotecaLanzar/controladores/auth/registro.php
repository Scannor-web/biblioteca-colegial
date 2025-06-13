<?php
// registro.php: guarda nuevos usuarios en MySQL
include '../../modelos/conexion.php';
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);
$nombre = trim($data['nombre'] ?? '');
$correo = trim($data['correo'] ?? '');
$usuario = trim($data['usuario'] ?? '');
$clave = password_hash($data['clave'] ?? '', PASSWORD_DEFAULT);

try {
  $pdo = conectar();
  $stmt = $pdo->prepare("INSERT INTO usuarios (nombre, correo, usuario, clave) VALUES (?, ?, ?, ?)");
  $stmt->execute([$nombre, $correo, $usuario, $clave]);
  echo json_encode(['success' => true]);
} catch (PDOException $e) {
  $mensaje = $e->getCode() === '23000' ? 'Correo o usuario ya registrado' : 'Error al registrar';
  echo json_encode(['success' => false, 'mensaje' => $mensaje]);
}
?>