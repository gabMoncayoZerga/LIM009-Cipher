describe('cipher', () => {
 it('debería ser un objeto', () => {
   assert.equal(typeof cipher, 'object');
 });
});

describe('cipher.encode', () => {
 it('debería ser una función', () => {
   assert.equal(typeof cipher.encode, 'function');
 });
 it("debería retornar 'HIJKLMNOPQRSTUVWXYZABCDEFG' para 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' con offest 33", () => {
   assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
 });
 it("debería retornar 'H%I' para 'A(espacio)B' con offest 33", () => {
   assert.equal(cipher.encode(33,"A B"),"H%I");
 });
});

describe('cipher.decode', () => {
 it('debería ser una función', () => {
   assert.equal(typeof cipher.decode, 'function');
 });
 it("debería retornar 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' para 'HIJKLMNOPQRSTUVWXYZABCDEFG' con offest 33", () => {
   assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
 });
 it('debería retornar "H  I" para "A  B " con offest 33', () => {
 assert.equal(cipher.decode(33,"H I"),"A B");
 });
});
