import styled from "@emotion/styled";

const sizes = {
    sm: '16px',
    core: '20px',
    lg: '24px'
}

const Text = styled.p(({ theme, color, size = 'core' }) => ({
    color: theme.colors[color] || theme.colors.text,
    fontSize: sizes[size],
    _hover: {
        color: 'yellow',
        cursor: 'pointer'
    }
}));

export default Text;
