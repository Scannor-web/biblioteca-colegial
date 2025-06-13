<?php
// login.php: autenticación simulada
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);
$usuario = $data['usuario'] ?? '';
$clave = $data['clave'] ?? '';

if ($usuario === 'admin' && $clave === '1234') {
  echo json_encode([
    'success' => true,
    'usuario' => [
      'nombre' => 'Administrador',
      'correo' => 'admin@colegio.edu.co'
    ]
  ]);
} else {
  echo json_encode(['success' => false, 'mensaje' => 'Credenciales inválidas']);
}
?>