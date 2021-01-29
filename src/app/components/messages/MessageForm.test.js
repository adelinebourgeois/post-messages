import React from "react";
import { Provider } from 'react-redux';
import * as reactRedux from 'react-redux';
import store from '../../store';
import {render, fireEvent} from '@testing-library/react'
import MessageForm from "../messages/MessageForm";
import {beforeEach, expect, it} from "@jest/globals";

const USERNAME = 'Adeline';

/* mocking useDispatch on our mock store */
const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

beforeEach(() => {
    useDispatchMock.mockClear()
})

it('dispatch message action to store', () => {
    const dispatch = jest.fn();
    const onSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<Provider store={store}><MessageForm /></Provider>);
    const filledInputText = 'Vivamus hendrerit ipsum eros';
    const radioButton = 'public';

    useDispatchMock.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText(/Message/i), { target: { value: filledInputText } })
    fireEvent.click(getByText(/Envoyer/i));

    expect(onSubmit).toBeCalled();
    expect(dispatch).toHaveBeenCalledWith({type: 'post', payload: { userName: USERNAME, filledInputText, radioButton}});
})