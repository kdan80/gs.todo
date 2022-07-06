import React from 'react';
import { render } from '@testing-library/react';
import Tutorial from './Tutorial';

describe("when rendered with `onSendWaves` prop", () => {
    it("should render the sending waves button", () => {
        render(<Tutorial/>);
    });
  });