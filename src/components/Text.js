import styled from "@emotion/styled";

const sizes = {
    sm: '16px',
    core: '20px',
    lg: '24px'
}

const Text = styled.p(({ theme, color, size = 'core', ...styles }) => ({
    color: theme.colors[color] || theme.colors.text,
    fontSize: sizes.core,
    marginBlock: 0,
    ...styles
}));

export default Text;
