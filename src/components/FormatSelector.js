import React, { useState, useEffect, useRef } from 'react';
import { Dropdown, Multiselect, Field, Menu, Item, Label } from '@zendeskgarden/react-dropdowns';
import { Tag } from '@zendeskgarden/react-tags';
import debounce from 'lodash.debounce';
import { getOptions } from '../helpers/formatter';

const options = getOptions();

const FormatSelector = ({ formatter, handleFormatterChange }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [matchingOptions, setMatchingOptions] = useState(options);
    const getSelectedItems = () => {
        const result = options.filter(obj => {
            return formatter.includes(obj);
        })
        setSelectedItems(result);
    }


    useEffect(() => {
        getSelectedItems();
    }, []);


    const filterMatchingOptionsRef = useRef(
        debounce((value) => {
            const matchedOptions = options.filter(option => {
                return option.trim().toLowerCase().indexOf(value.trim().toLowerCase()) !== -1;
            });

            setMatchingOptions(matchedOptions);
            setIsLoading(false);
        }, 300)
    );

    useEffect(() => {
        setIsLoading(true);
        filterMatchingOptionsRef.current(inputValue);
    }, [inputValue]);

    const renderOptions = () => {
        if (isLoading) {
            return <Item disabled>Loading</Item>;
        }

        if (matchingOptions.length === 0) {
            return <Item disabled>No vegetables found</Item>;
        }

        return matchingOptions.map(option => (
            <Item key={option} value={option}>
                <span>{option}</span>
            </Item>
        ));
    };
    return (
        <Dropdown
            inputValue={inputValue}
            selectedItems={selectedItems}
            onSelect={items => {
                setSelectedItems(items)
                handleFormatterChange(items)
            }}
            downshiftProps={{ defaultHighlightedIndex: 0 }}
            onInputValueChange={value => setInputValue(value)}
        >
            <Field>
                <Label>Vegetables</Label>
                <Multiselect
                    renderItem={({ value, removeValue }) => (
                        <Tag>
                            <span>{value}</span>
                            <Tag.Close onClick={() => removeValue()} />
                        </Tag>
                    )}
                />
            </Field>
            <Menu>{renderOptions()}</Menu>
        </Dropdown>
    );
}

export default FormatSelector