import { createMachine } from 'xstate';

export const toggleMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswDoCSAdgIYDGyAlgG5gDEaG2A2gAwC6ioADqrORagQ4gAHogCMAVgAcOAMwBOWQCYlEsQHZmU9fOYSANCACe42WJxjZEgCxilU+eonMtANgC+7w-Sy4AgmRUtD5MbELcvPyCSCLi0nKKKmqa2roGxohS5spK8pbW8lJq1maeXiAEqBBwQiFg4Tx85AJCoggAtK6GJh2uOC4Dg0Pqnt7ovvjEgdQNkc3RoG3WSt2Z6v2uEvKuzNZSzLJSsrIj5XU4ARQzMRFNLTFtSq598q+F8tJpEuqrCA44Ek220UWVkJRsZXcQA */
  id: 'toggle',
  initial: 'Inactive',
  states: {
    Inactive: {
      on: { toggle: 'Active' },
    },
    Active: {
      on: { toggle: 'Inactive' },
      after: { 2000: 'Inactive' },
    },
  },
});