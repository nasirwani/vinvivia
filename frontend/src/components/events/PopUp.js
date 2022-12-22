import { Radio, Card } from "antd";
import CreateEvent from "./CreateEvent";
import { useState } from 'react'
const PopUp = ({ show, handleOnClose }) => {
    const [showDrawer, setShowDrawer] = useState(false)
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <Card
            open={show}
            onClose={handleOnClose}
            maskClosable={true}
            title="Choose an Option"
            style={{
                width: 400,
                margin: '0 auto'
            }}

        >
            <Radio.Group onChange={onChange} value={value}>

                <Radio
                    value={1}
                    type="radio"
                    style={{ display: 'block' }}
                >
                    Create Demo Event
                </Radio>

                <Radio type="radio"
                    value={2}
                    style={{ display: 'block' }}
                    onClick={() => setShowDrawer(true)}
                > Create New Event
                    <CreateEvent
                        show={showDrawer}
                        handleOnClose={() => setShowDrawer(false)}
                    />
                </Radio>

                <Radio
                    type="radio"
                    value={3}
                    style={{ display: 'block' }}>
                    Create New Event from Existing One
                </Radio>

            </Radio.Group>
        </Card>



    )
}
export default PopUp;