import reducer from '../../app/store/tasksSlice';

test('should return the initial state', () => {
  expect(reducer(undefined, {type: undefined})).toEqual({
    status: 'idle',
    entities: [
      {
        id: '1',
        title: 'Task 1',
        done: false,
      },
      {
        id: '2',
        title: 'Task 2',
        done: false,
      },
    ],
  });
});
