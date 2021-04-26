import React from 'react'
import { useState, useEffect } from 'react'
import { Form, Button, Container, Col, Row, Badge } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'

let pendingExportsForm = [
    {
        val: "Buyer",
        key: "buyer"
    },
    {
        val: "Country",
        key: "country"
    }, {
        val: "Product Description",
        key: 'productDescription'
    },
    {
        val: "Grade",
        key: 'grade'
    },
    {
        val: "HS Code",
        key: 'hSCode'
    },

    {
        val: "PI No",
        key: 'pINo'
    },

    {
        val: "Qty. (MT)",
        key: 'qtyMT'
    },
    {
        val: "Rate per MT USD",
        key: 'ratePerMTUSD'
    }, {
        val: "PI Value (USD)",
        key: 'pIValueUSD'
    },
    {
        val: "PI Value (INR)",
        key: 'pIValueINR'
    },
    {
        val: "No. of Container",
        key: 'noOfContainer'
    },
    {
        val: "ECGC Limit",
        key: 'eCGCLimit'
    },
    {
        val: "Palletisation Status",
        key: 'palletisationStatus'
    }, {
        val: "Packing Mark",
        key: 'packingMark'
    },
    {
        val: "Dispatch Date in ERP",
        key: 'dispatchDateInERP'
    },
    {
        val: "Dispatch date as PerPRODUCTION",
        key: 'dispatchDateProduction'
    },
    {
        val: "Container Placing Date",
        key: 'containerPlacingDate'
    },
    {
        val: "Sale Order Status",
        key: 'saleOrderStatus'
    },
    {
        val: "Payment Term",
        key: 'paymentTerm'
    },
    {
        val: "Remark",
        key: 'remark'
    },
]
function PendingExport(props) {
    const history = useHistory();
    const [formData, setFormData] = useState({});
    useEffect(() => {
        async function fectchFormData() {
            try {
                const { data } = await axios.get(`http://localhost:3001/documents/${props.location.state.id}`);
                setFormData(data);
            }
            catch (err) {
                alert(JSON.stringify(err));
                console.log('err', err);
            }
        };
        fectchFormData();
    }, [])

    const submit = () => {
        //"stringValue":"\"undefined\"","kind":"ObjectId","value":"undefined","path":"_id","reason":
        var {stringValue ,kind,value ,path , reason , ...formUserData } = formData;
        // var formUserData = JSON.stringify(formData);
        console.log(JSON.stringify(formData));
        if (props?.location?.state?.action === "Edit") {
            async function patchFormData() {
                try {
                    const { data } = axios.patch(`http://localhost:3001/documents/${props.location.state.id}`, {...formUserData});
                }
                catch (err) {
                    alert(JSON.stringify(err));
                    console.log('err', err);
                }
            }
            patchFormData();
        }
        else {
            async function insertFormData() {
                try {
                    const { data } = await axios.post(`http://localhost:3001/documents/`, { ...formUserData })
                        .then(res => {
                            console.log(res);
                            console.log(res.data);
                        })
                }
                catch (err) {
                    alert(JSON.stringify(err));
                    console.log('err', err);
                }
            };
            insertFormData();
        }
        history.push("/");
    };

    const handleChange = (value, key) => {
        setFormData({ ...formData, ...{ [key]: value ?? "" } });
    }
    return (
        <div>
            <div>
                <Container className="pt-4">
                    <h1> <Badge variant="secondary">{props.location.state.action} Pending Exports</Badge>{' '} </h1>
                    <hr></hr>
                </Container>
            </div>
            <Container>
                {pendingExportsForm.map(formElement => {
                    return <div key={formElement.key}>
                        <Row>
                            <Col md={12} lg={6}>
                                <div className=" pt-1 border-none">
                                    <label className="px-2">{formElement.val} </label>
                                </div>
                                <div className="pb-3 border-none">
                                    <input type="text" className="form-control px-2" value={formData[formElement.key] ?? props?.history?.location?.state[formElement.key]}
                                        onChange={(e) => { handleChange(e.target.value, formElement.key) }} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                })}
                <div className="px-3 py-3" >
                    <Button variant="primary" onClick={(e) => { submit() }} > {props?.location?.state?.action === "Edit" ? "Update" : "Save"}  </Button>
                </div>
            </Container>
        </div>
    )
}
export default PendingExport
