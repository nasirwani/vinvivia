import { Form, Radio } from "antd";
const PopUp = () => {
    return (
        <Form className="popup"
        layout={"vertical"}>
            <Form.Item >
                <Radio.Group>
                    <Radio>
                        btn1
                    </Radio>
                    <Radio>
                        btn2
                    </Radio>
                    <Radio>
                        btn3
                    </Radio>
                </Radio.Group>
            </Form.Item>
        </Form>
    )
}
export default PopUp;