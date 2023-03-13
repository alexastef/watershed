import { ThemeProvider} from "@emotion/react";
import theme from "./theme";
import Text from "./components/Text";
import styled from "@emotion/styled";

import './theme/globals.css';
import Flex from "./components/Flex";
import Heading from "./components/Heading";
import InfoBox from "./components/InfoBox";

const Page = styled.div`
  padding: 2rem;
  height: 100vh;
`

const StyledSection = styled.section({
    width: '100%',
    backgroundColor: theme.colors.background,
    height: 'auto',
    padding: '2em 1em 2em 1em'
});

const blockText = [
    {
        index: '01',
        title: 'Best-in-class carbon accounting.',
        body: 'We employ a team of climate experts, data scientists, and carbon analysts to develop and vet cutting-edge data models and carbon accounting methodologies. If you’re looking for carbon data that meets the highest bar for regulatory scrutiny, go with Watershed.'
    },
    {
        index: '02',
        title: 'Faster, easier reporting.',
        body: 'Watershed was built to help companies get to real carbon reduction, fast. We make it easy to ingest, clean, structure, and disclose your carbon data—so you can spend less time managing data, and more time on what matters.'
    },
    {
        index: '03',
        title: 'Custom solutions',
        body: 'Every standard is different, and every company has different needs. With our flexible software platform, you can build data categories, methodologies, and reports that adapt as your needs change.'
    }
]

const SectionFlex = styled(Flex)`
  @media screen and (max-width: 520px) {
    flex-direction: column;
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Text textAlign="center">Watershed Technical Screen</Text>
          <StyledSection>
              <Heading marginBottom="1rem">The Watershed difference</Heading>
              <SectionFlex justifyContent="space-between">
                  {blockText.map(block => (
                      <InfoBox
                        title={block.title}
                        body={block.body}
                        index={block.index}
                      />
                  ))}
              </SectionFlex>
          </StyledSection>
      </Page>
    </ThemeProvider>
  );
}

export default App;
