import { css } from "styled-components";

const variables = css`
    :root {

        // Color Palette                         

        // Font sizes
        --ft-xxs       : 0.75rem;
        --ft-xs        : 0.8125rem;
        --ft-sm        : 0.875rem;
        --ft-md        : 1rem;
        --ft-lg        : 1.125rem;
        --ft-xl        : 1.25rem;
        --ft-xxl       : 1.375rem;
        --ft-heading   : 2rem;

        --font-sans: "Poppins", "Roboto", "Arial", "sans", "sans-serif";
        --font-mono: "Hack", "SF Mono", "Hack", "mono";

        // Padding
        --pd-win-sm     : 5vw;
        --pd-win-lg     : 3rem;

        // Header height is fixed/non-responsive in order to work with an intersection observer
        --header-height : 80px;

        --sn-max-width  : 64rem;
        --sections      : 4;


        // Z-indices
        --layer-1   : 1;
        --layer-2   : 10;
        --layer-3   : 100;
        --layer-4   : 1000;
    }
`;

export default variables;