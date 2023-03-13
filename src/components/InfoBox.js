import Flex from "./Flex";
import Heading from "./Heading";
import styled from "@emotion/styled";
import Text from "./Text";

const IndexText = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.header};
  margin-block: 0;
  margin-bottom: 0.5rem;
`

const InfoBox = ({ index, title, body }) => (
    <Flex flexDirection="column">
      <IndexText>{index}</IndexText>
      <Heading marginBottom="0.25rem" color="body">{title}</Heading>
      <Text>{body}</Text>
    </Flex>
);

export default InfoBox;
