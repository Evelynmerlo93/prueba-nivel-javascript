import { expect, test } from 'vitest';
import { isValidPlateFormat } from '../js/validator.js';

test('debería aceptar una matrícula válida con formato correcto', () => {
  expect(isValidPlateFormat('1234 BCD')).toBe(true);
});

test('debería rechazar una matrícula sin espacio', () => {
  expect(isValidPlateFormat('1234BCD')).toBe(false);
});

test('debería rechazar una matrícula con letras prohibidas', () => {
  expect(isValidPlateFormat('1234 AEI')).toBe(false); // la A, E, I no están permitidas
});