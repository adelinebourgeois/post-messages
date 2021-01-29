import React from "react";
import * as reactRedux from 'react-redux';
import {render} from '@testing-library/react'
import {beforeEach, describe, expect, it} from "@jest/globals";
import MessageList from "./MessageList";
import store from './../../store';

describe("MessageList", () => {
    // mocking useSelector on our mock store
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

    // mocks are cleared before each test case
    beforeEach(() => {
        useSelectorMock.mockClear()
    })

    it('should render ListItem if messages.length > 0', () => {
        useSelectorMock.mockReturnValue(store.getState().messages);
        const component = render(<MessageList />);

        expect(component).toMatchSnapshot();
    })
})
