import styled from "@emotion/styled";

const Flex = styled.div`
  display: flex;
  ${({ flexDirection, justifyContent, alignItems }) => ({
    flexDirection,
    justifyContent: justifyContent || 'flex-start',
    alignItems
  })}
`

export default Flex;
