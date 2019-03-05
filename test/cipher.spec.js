describe('cipher', () => {
  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });
});

describe('cipher.encode', () => {
  it('debería ser una función', () => {
    assert.equal(typeof cipher.encode, 'function');
  });
  it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
    assert.equal(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
  });
  it('debería retornar "TUVWXYZABCDEFGHIJKLMNOPQRS" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33 negativo', () => {
    assert.equal(cipher.encode(-33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'TUVWXYZABCDEFGHIJKLMNOPQRS');
  });
  it('debería retornar "H%I" para "A(espacio)B" con offset 33', () => {
    assert.equal(cipher.encode(33, 'A B'), 'H%I');
  });
  it('debería retornar "huh" para "ana" con offset 33', () => {
    assert.equal(cipher.encode(33, 'ana'), 'huh');
  });
  it('debería retornar "tgt" para "ana" con offset 33 negativo', () => {
    assert.equal(cipher.encode(-33, 'ana'), 'tgt');
  });
  it('debería retornar "òçò" para "ÑñÑ" con offset 33 positivo', () => {
    assert.equal(cipher.encode(33, 'ÑñÑ'), 'òçò');
  });
  it('debería retornar "!#!" para "#%#" con offset 33 positivo', () => {
    assert.equal(cipher.encode(33, '#%#'), '!#!');
  });
  it('debería retornar "Úáåìò" para "äëïöü" con offset 33 positivo', () => {
    assert.equal(cipher.encode(33, 'äëïöü'), 'Úáåìò');
  });
  it('debería retornar "îõùÕÛ" para "äëïöü" con offset 33 negativo', () => {
    assert.equal(cipher.encode(-33, 'äëïöü'), 'îõùÕÛ');
  });
});

describe('cipher.decode', () => {
  it('debería ser una función', () => {
    assert.equal(typeof cipher.decode, 'function');
  });
  it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
    assert.equal(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  });
  it('debería retornar "OPQRSTUVWXYZABCDEFGHIJKLMN" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33 negativo', () => {
    assert.equal(cipher.decode(-33, 'HIJKLMNOPQRSTUVWXYZABCDEFG'), 'OPQRSTUVWXYZABCDEFGHIJKLMN');
  });
  it('debería retornar "A  B " para "H%I" con offset 33', () => {
    assert.equal(cipher.decode(33, 'H%I'), 'A B');
  });
  it('debería retornar "ana" para "huh" con offset 33', () => {
    assert.equal(cipher.decode(33, 'huh'), 'ana');
  });
  it('debería retornar "ana" para "tgt" con offset 33 negativo', () => {
    assert.equal(cipher.decode(-33, 'tgt'), 'ana');
  });
  it('debería retornar "% %" para "#%#" con offset 33 positivo', () => {
    assert.equal(cipher.decode(33, '#%#'), '% %');
  });
  it('debería retornar "äëïöü" para "Úáåìò" con offset 33 positivo', () => {
    assert.equal(cipher.decode(33, 'Úáåìò'), 'äëïöü');
  });
  it('debería retornar "Úáåìò" para "äëïöü" con offset 33 negativo', () => {
    assert.equal(cipher.decode(-33, 'äëïöü'), 'Úáåìò');
  });
});
