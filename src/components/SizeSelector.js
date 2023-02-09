import React, { useEffect, useState } from 'react'
import { Dropdown, Field, Menu, Item, Select, Label } from '@zendeskgarden/react-dropdowns';
import { Row, Col } from '@zendeskgarden/react-grid';




const items = [
    { label: 'XL', value: 'XL' },
    { label: 'SM', value: 'SM' },
    { label: 'XXL', value: 'XXL' }
];
const SizeSelector = ({ size, handlePropertyChange }) => {
    const [selectedItem, setSelectedItem] = useState(items[0]);
    const getSelectedItem = () => {
        const result = items.filter(obj => {
            return obj.value === size;
        })
        setSelectedItem(result[0]);
    }
    useEffect(() => {
        getSelectedItem();
    }, [selectedItem]);
    return (
        <Row justifyContent="center">
            <Col sm={12}>
                <Dropdown
                    selectedItem={selectedItem}
                    onSelect={(item) => {
                        setSelectedItem(item);
                        handlePropertyChange("size", item.value);
                    }}
                    downshiftProps={{
                        itemToString: (item) => {
                            return item && item.label;
                        }
                    }}
                >
                    <Field>
                        <Label>Size</Label>
                        <Select>{selectedItem.label}</Select>
                    </Field>
                    <Menu>
                        {items.map(option => (
                            <Item key={option.value} value={option}>
                                {option.label}
                            </Item>
                        ))}
                    </Menu>
                </Dropdown>
            </Col>
        </Row >
    );
}

export default SizeSelector