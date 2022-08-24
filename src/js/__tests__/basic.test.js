import extractedProps from '../basic';

test('extractedProps, description is opened', () => {
  expect(extractedProps({
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон',
  })).toEqual([8, 'Двойной выстрел', 'Двойной выстрел наносит двойной урон', 'http://...']);
});

test('extractedProps, description is hidden', () => {
  expect(extractedProps({
    id: 9,
    name: 'Нокаутирующий удар',
    icon: 'http://...',
  })).toEqual([9, 'Нокаутирующий удар', 'Описание не доступно', 'http://...']);
});
