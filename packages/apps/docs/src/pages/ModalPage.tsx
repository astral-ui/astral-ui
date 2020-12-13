import React, {useRef, useState} from "react";
import {Button} from "@astral-ui/button";
import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay} from "@astral-ui/modal";
import {HStack} from "@astral-ui/hstack";
import {TextButton} from "@astral-ui/text-button";
import {Page} from "../components/Page/Page";
import {Card, CardBody} from "@astral-ui/card";

export function ModalPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const initialFocusRef = useRef<HTMLInputElement>(null);
  const finalFocusRef = useRef<HTMLButtonElement>(null);
  return (
    <Page title="Modal">
      <Card>
        <CardBody>
          <Button ref={finalFocusRef} onClick={(): void => setIsOpen(true)}>Modal</Button>
          {isOpen && <Modal initialFocusRef={initialFocusRef} finalFocusRef={finalFocusRef} onDismiss={(): void => setIsOpen(false)}>
            <ModalOverlay />
            <form onSubmit={(ev): void => {ev.preventDefault(); ev.stopPropagation();}}>
              <ModalContent>
                <ModalHeader>
                  Header
                  <ModalCloseButton />
                </ModalHeader>
                <ModalBody>
                  Body
                </ModalBody>
                <ModalFooter>
                  <HStack spacing={4} styles={{alignItems: "center"}}>
                    <Button type={"submit"} variant={"primary"} onClick={(): void => setIsOpen(false)}>OK</Button>
                    <TextButton type={"button"} variant={"secondary"} onClick={(): void => setIsOpen(false)}>Cancel</TextButton>
                  </HStack>
                </ModalFooter>
              </ModalContent>
            </form>
          </Modal>}
        </CardBody>
      </Card>
    </Page>
  );
}
