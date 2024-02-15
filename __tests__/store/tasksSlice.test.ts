import {describe, it, expect} from '@jest/globals';
import reducer, {InitialState} from '../../app/store/tasksSlice';

describe('TaskSlice', () => {
  it('should return the initial state', () => {
    const initialState: InitialState = {
      status: 'idle',
      entities: [
        {
          id: '1',
          title: 'Task 17',
          done: false,
        },
        {
          id: '2',
          title: 'Task 26',
          done: false,
        },
      ],
    };

    expect(reducer(initialState, {type: ''})).toEqual({
      status: 'idle',
      entities: [
        {
          id: '1',
          title: 'Task 17',
          done: false,
        },
        {
          id: '2',
          title: 'Task 26',
          done: false,
        },
      ],
    });
  });
});
