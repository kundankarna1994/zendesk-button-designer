import React, { useEffect, useState } from 'react'
import { Field, Label, Input } from '@zendeskgarden/react-forms';
import { Row, Col, Grid } from '@zendeskgarden/react-grid';
import ButtonModal from './components/ButtonModal';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import Formatter from './helpers/formatter';
const DesignerButton = () => {

    const [result, setResult] = useState({
        title: "Click here",
        link: "",
        properties: {
            size: "SM"
        },
        formatter: []
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setResult({
            ...result, [name]: value
        })
    }

    const handlePropertyChange = (name, value) => {
        const properties = result.properties;
        setResult({
            ...result,
            properties: {
                ...result.properties,
                [name]: value
            }
        })
    }

    const handleFormatterChange = (value) => {
        setResult({
            ...result,
            formatter: value
        })
    }
    const handleResultChange = (e) => {
        const value = e.target.value;
        setResult(JSON.parse(value));
    }
    const properties = ["upperCase", "capitalize", "trim", "removeNumbers"];
    return (
        < ThemeProvider focusVisibleRef={null} >
            <Grid>
                <Row justifyContent="center">
                    <Col sm={5}>
                        <Field>
                            <Label>Button</Label>
                            <Input value={JSON.stringify(result)} onChange={handleResultChange} />
                        </Field>
                    </Col>
                </Row>
                <ButtonModal result={result} handleChange={handleChange} handlePropertyChange={handlePropertyChange} handleFormatterChange={handleFormatterChange} />

                <h1>{Formatter.init(result.title, result.formatter)}</h1>
            </Grid>
        </ThemeProvider >
    )
}

export default DesignerButton