import styled from "@emotion/styled";

const Flex = styled.div`
  display: flex;
  ${({ flexDirection, justifyContent, alignItems, ...styles }) => ({
    flexDirection,
    justifyContent: justifyContent || 'flex-start',
    alignItems,
    ...styles
  })}
`

export default Flex;
