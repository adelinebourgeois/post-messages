import React from "react";
import * as reactRedux from 'react-redux';
import {render, fireEvent} from '@testing-library/react'
import MessageForm from "../messages/MessageForm";
import {beforeEach, describe, expect, it} from "@jest/globals";
import store from './../../store';


describe ("MessageForm", () => {
    const USERNAME = 'Adeline';

    /* mocking useDispatch on our mock store */
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch').mockImplementation(() => store.dispatch);;

    beforeEach(() => {
        useDispatchMock.mockClear()
    })

    it('dispatch message action to store', () => {
        const dispatch = jest.fn();
        const { getByLabelText, getByText } = render(<MessageForm />);
        const filledInputText = 'Vivamus hendrerit ipsum eros';
        const radioButton = 'public';

        useDispatchMock.mockReturnValue(dispatch);

        fireEvent.change(getByLabelText(/Message/i), { target: { value: filledInputText } })
        fireEvent.change(getByLabelText(/Public/i), { target: { value: radioButton } })
        fireEvent.click(getByText(/Envoyer/i));

        expect(dispatch).toHaveBeenCalledWith({type: 'post', payload: { userName: USERNAME, text: filledInputText, type: radioButton}});
    })
})
