// www/tests/Home.test.js
const assert = require('assert');

console.log("Iniciando teste simples do frontend...");

// Uma função de exemplo para testar
function somar(a, b) {
  return a + b;
}

// O teste em si
try {
  assert.strictEqual(somar(2, 3), 5, "A soma de 2 + 3 deve ser 5");
  console.log("Teste do frontend passou!");
  process.exit(0); // Sai com código 0 (sucesso)
} catch (error) {
  console.error("ERRO NO TESTE DO FRONTEND:", error.message);
  process.exit(1); // Sai com código 1 (erro)
}