import {timesTwo} from "./function";
import { render, screen } from '@testing-library/react';

test("multiplies by two", () => {
    expect(timesTwo(4).tobe(8));
})