import React, {ComponentType, useMemo, useState} from 'react';

import {
  Box,
  Caption,
  defaultTheme,
  Heading,
  HStack,
  IconButton,
  Input,
  Spacer,
  TextButton,
  ThemeProvider,
  VStack
} from '@astral-ui/all';
import {HashRouter} from "react-router-dom";
import {ButtonPage} from "./pages/ButtonPage";
import {TextButtonPage} from "./pages/TextButtonPage";
import {InputPage} from "./pages/InputPage";
import {ModalPage} from "./pages/ModalPage";
import {CheckboxPage} from "./pages/CheckboxPage";
import {MenuPage} from "./pages/MenuPage";
import {Card} from "./components/Card";
import {IconButtonPage} from "./pages/IconButtonPage";
import {SelectPage} from "./pages/SelectPage";
import {TextareaPage} from "./pages/TextareaPage";
import {RangePage} from "./pages/RangePage";
import {RadioPage} from "./pages/RadioPage";
import {fuzzySearch} from "./libs/fuzzySearch";
import {FaDiscord, FaGithub, FaHeart, FaSearch} from "react-icons/all";
import {CaptionPage} from "./pages/CaptionPage";
import {BoxPage} from "./pages/BoxPage";
import {LabelPage} from "./pages/LabelPage";
import {HeadingPage} from "./pages/HeadingPage";
import {TextPage} from "./pages/TextPage";
import {Page} from "./components/Page/Page";

function PendingPage(title: string): ComponentType<unknown> {
  return function LabeledPendingPage(): JSX.Element {
    return (<Page title={title}>Pending</Page>);
  }
}

type PageMetadata = {
  name: string;
  label: string;
  aliases?: string[];
  Page: React.ComponentType<unknown>;
};

function searchPagePredicate(searchTerm: string): (page: PageMetadata) => boolean {
  return (page): boolean => {
    if (fuzzySearch(searchTerm.toLowerCase(), page.name.toLowerCase())) return true;
    if (fuzzySearch(searchTerm.toLowerCase(), page.label.toLowerCase())) return true;
    if (page.aliases && page.aliases.some(alias => fuzzySearch(searchTerm.toLowerCase(), alias.toLowerCase()))) return true;
    return false;
  }
}

const guides: PageMetadata[] = [
  {name: "GettingStarted", label: "Getting Started", Page: PendingPage("Getting Started")},
  {name: "DesignPrinciples", label: "Design Principles", Page: PendingPage("Design Principles")},
  {name: "Styling", label: "Styling Components", Page: PendingPage("Styling Components")},
  {name: "SimpleComponent", label: "Simple Custom Component", Page: PendingPage("Create Simple Custom Component")},
  {name: "ComplexComponent", label: "Complex Custom Component", Page: PendingPage("Create Complex Custom Component")},
  {name: "Icons", label: "Icons", Page: PendingPage("Icons")},
  {name: "Theme", label: "Theme", Page: PendingPage("Theme")},
  {name: "ThemeDesigner", label: "Theme Designer", Page: PendingPage("Theme Designer")},
  {name: "Resources", label: "Resources", Page: PendingPage("Resources")}
];

const components: PageMetadata[] = [
  {name: "Button", label: "Button", Page: ButtonPage},
  {name: "IconButton", label: "Icon Button", Page: IconButtonPage},
  {name: "Checkbox", label: "Checkbox", aliases: ["Input"], Page: CheckboxPage},
  {name: "Input", label: "Input", Page: InputPage},
  {name: "Menu", label: "Menu", Page: MenuPage},
  {name: "Modal", label: "Modal", Page: ModalPage},
  {name: "Radio", label: "Radio", aliases: ["Input"], Page: RadioPage},
  {name: "Range", label: "Range", aliases: ["Input"], Page: RangePage},
  {name: "Select", label: "Select", Page: SelectPage},
  {name: "Textarea", label: "Textarea", Page: TextareaPage},
  {name: "TextButton", label: "Text Button", Page: TextButtonPage},
  {name: "Label", label: "Label", Page: LabelPage},
  {name: "Caption", label: "Caption", Page: CaptionPage},
  {name: "HStack", label: "HStack", Page: PendingPage("HStack")},
  {name: "VStack", label: "VStack", Page: PendingPage("VStack")},
  {name: "Box", label: "Box", Page: BoxPage},
  {name: "Heading", label: "Heading", Page: HeadingPage},
  {name: "Text", label: "Text", Page: TextPage},
  {name: "Spacer", label: "Spacer", Page: PendingPage("Spacer")},
  {name: "ThemeProvider", label: "ThemeProvider", Page: PendingPage("ThemeProvider")}
].sort((a, b) => a.name > b.name ? 1 : -1);

const hooks: PageMetadata[] = [
  {name: "useClickOutside", label: "useClickOutside", Page: PendingPage("useClickOutside")},
  {name: "useFocusTrap", label: "useFocusTrap", Page: PendingPage("useFocusTrap")},
  {name: "useFocusOutside", label: "useFocusOutside", Page: PendingPage("useFocusOutside")},
].sort((a, b) => a.name > b.name ? 1 : -1);

const utility: PageMetadata[] = [
  {name: "styleToCss", label: "styleToCss", Page: PendingPage("styleToCss")},
].sort((a, b) => a.name > b.name ? 1 : -1);


const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGuides = useMemo(() => guides.filter(searchPagePredicate(searchTerm)), [searchTerm]);
  const filteredComponents = useMemo(() => components.filter(searchPagePredicate(searchTerm)), [searchTerm]);
  const filteredHooks = useMemo(() => hooks.filter(searchPagePredicate(searchTerm)), [searchTerm]);
  const filteredUtility = useMemo(() => utility.filter(searchPagePredicate(searchTerm)), [searchTerm]);

  return (
    <HashRouter>
      <ThemeProvider theme={defaultTheme}>
        <VStack styles={{minHeight: "100vh", padding: 7, backgroundColor: "grayscale.0"}}>
          <Box>
            <HStack spacing={4} styles={{width: "100%", alignItems: "center"}}>
              <Heading size={"h4"} styles={{fontVariant: "small-caps"}}>astral-ui</Heading>
              <Spacer/>
              <IconButton title={"Discord"} variant="tertiary"><FaDiscord /></IconButton>
              <IconButton title={"Github"} variant="tertiary"><FaGithub /></IconButton>
              <IconButton title={"Sponsor"} variant="tertiary" styles={{color: "#DD3333"}}><FaHeart /></IconButton>
            </HStack>
          </Box>
          <HStack spacing={6} styles={{width: "100%"}}>
            <Card styles={{flexGrow: 0, flexShrink: 0, flexBasis: "320px", width: "320px", height: "100%"}}>
              <HStack>
                <IconButton styles={{borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRight: 0, borderWidth: 1, borderStyle: "solid", borderColor: "grayscale.40"}} disabled><FaSearch /></IconButton>
                <Input autoFocus styles={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0, width: "100%"}} placeholder={"Search..."} value={searchTerm} onChange={(ev): void => setSearchTerm(ev.target.value)} />
              </HStack>

              {filteredGuides.length > 0 && (<>
                <Heading size={"h5"}>Guides</Heading>
                <VStack styles={{alignItems: "flex-start", padding: 4}}>
                  {filteredGuides.map(page =>
                    <TextButton key={page.name} onClick={(): void => {
                      document.getElementById("page-" + page.name)?.scrollIntoView();
                    }}>{page.label}</TextButton>
                  )}
                </VStack>
              </>)}

              {filteredComponents.length > 0 && (<>
                <Heading size={"h5"}>Components</Heading>
                <VStack styles={{alignItems: "flex-start", padding: 4}}>
                  {filteredComponents.map(page =>
                    <TextButton key={page.name} onClick={(): void => {
                      document.getElementById("page-" + page.name)?.scrollIntoView();
                    }}>{page.label}</TextButton>
                  )}
                </VStack>
              </>)}

              {filteredHooks.length > 0 && (<>
                <Heading size={"h5"}>Hooks</Heading>
                <VStack styles={{alignItems: "flex-start", padding: 4}}>
                  {filteredHooks.map(page =>
                    <TextButton key={page.name} onClick={(): void => {
                      document.getElementById("page-" + page.name)?.scrollIntoView();
                    }}>{page.label}</TextButton>
                  )}
                </VStack>
              </>)}

              {filteredUtility.length > 0 && (<>
                <Heading size={"h5"}>Utility</Heading>
                <VStack styles={{alignItems: "flex-start", padding: 4}}>
                  {filteredUtility.map(page =>
                    <TextButton key={page.name} onClick={(): void => {
                      document.getElementById("page-" + page.name)?.scrollIntoView();
                    }}>{page.label}</TextButton>
                  )}
                </VStack>
              </>)}

            </Card>

            <VStack spacing={6} styles={{flexGrow: 1, height: "100%"}}>
              {filteredGuides.map(page =>
                <div key={page.name} id={"page-" + page.name}>
                  <page.Page />
                </div>
              )}

              {filteredComponents.map(page =>
                <div key={page.name} id={"page-" + page.name}>
                  <page.Page />
                </div>
              )}
              {filteredHooks.map(page =>
                <div key={page.name} id={"page-" + page.name}>
                  <page.Page />
                </div>
              )}

              {filteredUtility.map(page =>
                <div key={page.name} id={"page-" + page.name}>
                  <page.Page />
                </div>
              )}
            </VStack>
          </HStack>
          <Spacer/>
          <Box>
            <Caption size="small">Copyright &copy; Wayne Leroux</Caption>
          </Box>
        </VStack>
      </ThemeProvider>
    </HashRouter>
  );
};

export default App;
