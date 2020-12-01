import React, {useMemo, useState} from "react";
import {VStack} from "@astral-ui/vstack";
import {Menu, MenuContent, MenuDivider, MenuItem} from "@astral-ui/menu";
import {Button} from "@astral-ui/button";
import {Text} from "@astral-ui/text";
import {Spacer} from "@astral-ui/spacer";
import {FaChevronRight} from "react-icons/all";
import {Input} from "@astral-ui/input";
import {Page} from "../components/Page/Page";

export function MenuPage(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const items = ["Item #1", "Item #2", "Item #3", "Item #4"];
  const filteredItems = useMemo(() => items.filter(item => item.startsWith(searchTerm)), [items, searchTerm]);

  return (
    <Page title="Menu">
      <VStack spacing={6} styles={{boxShadow: 2, borderRadius: 1, padding: 6, alignItems: "flex-start"}}>
        <Menu onDismiss={(): void => {setIsOpen(false);}}>
          <Button onClick={(): void => setIsOpen(prev => !prev)}>Menu</Button>
          {isOpen && <MenuContent styles={{left: "0", width: "320px"}}>
            <Menu onDismiss={(): void => setIsSubMenuOpen(false)}>
              <MenuItem onClick={(): void => setIsSubMenuOpen(prev => !prev)}>
                <Text size={"medium"}>Item #1</Text>
                <Spacer />
                <FaChevronRight />
              </MenuItem>
              {isSubMenuOpen && <MenuContent styles={{left: "100%", top: 0}}>
                <MenuItem>Sub-Menu Item #1</MenuItem>
              </MenuContent>}
            </Menu>
            <MenuItem>Item #2</MenuItem>
            <MenuDivider/>
            <MenuItem disabled>Item #3</MenuItem>
            <MenuItem>Item #4</MenuItem>
          </MenuContent>}
        </Menu>

        <Text>Search Items: {items.toString()}</Text>

        <Menu onDismiss={(): void => setSearchTerm("")}>
          <Input placeholder="Search..." value={searchTerm} onChange={(ev): void => setSearchTerm(ev.target.value)} />
          {searchTerm !== "" && filteredItems.length !== 0 && <MenuContent styles={{width: "320px"}}>
            {filteredItems.map(item => (
              <MenuItem key={item}>{item}</MenuItem>
            ))}
          </MenuContent>}
        </Menu>
      </VStack>
    </Page>
  )
}
