import { css } from "styled-components";

export const sizes = {
    tablet: "1024px",
    mobile: "768px",
};

export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (literals, ...placeholders) => css`
        @media (max-width: ${sizes[label]}) {
            ${css(literals, ...placeholders)}
        }
    `;
    return acc;
}, {});
