import React, { useState } from 'react';
import { Button } from '@zendeskgarden/react-buttons';
import { Modal, Header, Body, Footer, FooterItem, Close } from '@zendeskgarden/react-modals';
import { Row, Col } from '@zendeskgarden/react-grid';
import { Tabs, TabList, Tab, TabPanel } from '@zendeskgarden/react-tabs';
import { Field, Label, Input } from '@zendeskgarden/react-forms';
import SizeSelector from './SizeSelector';
import FormatSelector from './FormatSelector';
const ButtonModal = ({ result, handleChange, handlePropertyChange, handleFormatterChange }) => {
    const [visible, setVisible] = useState(false);
    const [selectedTab, setSelectedTab] = useState('tab-1');
    return (
        <Row>
            <Col textAlign="center">
                <Button onClick={() => setVisible(true)}>Open modal</Button>
                {visible && (
                    <Modal onClose={() => setVisible(false)}>
                        <Header tag="h2">Button Designer</Header>
                        <Body>
                            <Tabs selectedItem={selectedTab} onChange={setSelectedTab}>
                                <TabList>
                                    <Tab item="tab-1">Link & Title</Tab>
                                    <Tab item="tab-2">Size</Tab>
                                    <Tab item="tab-3">Design</Tab>
                                </TabList>
                                <TabPanel item="tab-1">
                                    <Row justifyContent="center">
                                        <Col sm={12}>
                                            <Field>
                                                <Label>Title</Label>
                                                <Input value={result.title} name="title" onChange={handleChange} />
                                            </Field>
                                        </Col>
                                        <Col sm={12}>
                                            <Field>
                                                <Label>Links</Label>
                                                <Input value={result.link} name="link" onChange={handleChange} />
                                            </Field>
                                        </Col>
                                    </Row>
                                </TabPanel>
                                <TabPanel item="tab-2">
                                    <SizeSelector size={result.properties.size} handlePropertyChange={handlePropertyChange} />
                                </TabPanel>
                                <TabPanel item="tab-3">
                                    <FormatSelector formatter={result.formatter} handleFormatterChange={handleFormatterChange} />
                                </TabPanel>
                            </Tabs>
                        </Body>
                        <Footer>
                            <FooterItem>
                                <Button onClick={() => setVisible(false)} isBasic>
                                    Cancel
                                </Button>
                            </FooterItem>
                            <FooterItem>
                                <Button isPrimary onClick={() => setVisible(false)}>
                                    Reset
                                </Button>
                            </FooterItem>
                        </Footer>
                        <Close aria-label="Close modal" />
                    </Modal>
                )}
            </Col>
        </Row>
    )
}

export default ButtonModal