/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/';
import { fireEvent, render, screen, within } from '@testing-library/react';
import React from 'react';
import TodoContainer from '../src/components/TodoContainer';

describe('TodoContainer', () => {
  it('renders without errors', () => {
    render(<TodoContainer />);
    expect(screen.getByText('Simple Todo App')).toBeInTheDocument();
  });

  it('adds a new list when the "Add List" button is clicked', () => {
    render(<TodoContainer />);
    const initialListCount = screen.getAllByRole('textbox', {
      name: '',
    }).length;
    fireEvent.click(screen.getByText('Add List'));
    const newListCount = screen.getAllByRole('textbox', { name: '' }).length;
    expect(newListCount).toBeGreaterThan(initialListCount);
  });

  it('adds a new todo item to the first list', () => {
    render(<TodoContainer />);
    const inputElement = screen.getByPlaceholderText('Add todo...');
    const submitButton = screen.getByText('Submit');
    fireEvent.change(inputElement, { target: { value: 'New Todo' } });
    fireEvent.click(submitButton);
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  it('changes the title of a list when the input value changes', () => {
    render(<TodoContainer />);
    const inputElement = screen.getByPlaceholderText('List Name', {
      name: 'Main Tasks',
    });
    fireEvent.change(inputElement, { target: { value: 'Updated Title' } });
    expect(inputElement.value).toBe('Updated Title');
  });

  it('toggles the completion status of a todo item', () => {
    render(<TodoContainer />);
    const checkboxElement = screen.getByRole('checkbox', {
      name: 'Apply to Subscript',
    });
    expect(checkboxElement.checked).toBe(true);
    fireEvent.click(checkboxElement);
    expect(checkboxElement.checked).toBe(false);
    fireEvent.click(checkboxElement);
    expect(checkboxElement.checked).toBe(true);
  });

  it('deletes a todo item', () => {
    render(<TodoContainer />);
    const todoItem = screen.getByText('Apply to Subscript').closest('li'); // Find the list item containing the text
    if (!todoItem) {
      throw new Error('Could not find the todo item for "Apply to Subscript"');
    }
    const deleteButton = within(todoItem).getByRole('button', {
      name: 'Delete',
    });
    const initialTodoCount = screen.getAllByRole('listitem').length;
    fireEvent.click(deleteButton);
    const currentTodoCount = screen.getAllByRole('listitem').length;
    expect(currentTodoCount).toBeLessThan(initialTodoCount);
    expect(screen.queryByText('Apply to Subscript')).toBeNull();
  });
});
