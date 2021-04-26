import * as React from 'react';
import { useEffect, useState } from 'react';
import { Container, Badge } from 'react-bootstrap';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import axios from 'axios'

var pendingExportSample = {
    "buyer": "",
    "country": "",
    "productDescription": "",
    "grade": "",
    "hSCode": "",
    "pINo": "",
    "qtyMT": "",
    "ratePerMTUSD": "",
    "pIValueUSD": ""
    , "pIValueINR": "",
    "noOfContainer": "",
    "eCGCLimit": "",
    "palletisationStatus": "",
    "packingMark": "",
    "dispatchDateInERP": ""
    , "dispatchDateProduction": "",
    "containerPlacingDate": "",
    "saleOrderStatus": "",
    "paymentTerm": "",
    "remark": ""
};

function PendingExportList(props) {

    const [exportsList, setExportsList] = useState([]);

    async function fectchPendingExports() {
        const { data } = await axios.get('http://localhost:3001/documents/');
        setExportsList(data);
    };

    useEffect(() => {
        fectchPendingExports();
    }, [])
    
    const handleEdit = values => {

        props.history.push({
            pathname: '/PendingExport',
            state: { id: values._id, action: "Edit" }

        });
    };

    const handleDelete = values => {
        var isConfirmed = window.confirm(" Are you sure want to delete the record !");
        if (isConfirmed) {
            async function deletePendingExports() {
                try {
                    const { data } = await axios.delete(`http://localhost:3001/documents/${values._id}`);
                    await fectchPendingExports();
                }
                catch (err) {
                    console.log('err', err);
                }
            };
            deletePendingExports();
            alert(' Your selected record deleted successfully ! ')
        }
    };


    const addPendingExport = () => {
        props.history.push({
            pathname: '/PendingExport',
            state: { action: "Add New" }
        });
    }

    const columns = [
        { field: 'buyer', headerName: 'Buyer', },
        { field: 'country', headerName: 'Country' },
        { field: 'productDescription', headerName: 'Product Description' },
        { field: 'grade', headerName: 'Grade' },
        { field: 'hSCode', headerName: 'HS Code' },

        { field: 'pINo', headerName: 'PI No' },
        { field: 'qtyMT', headerName: 'Qty MT' },
        { field: 'ratePerMTUSD', headerName: 'Rate Per MT USD', width: 160 },
        { field: 'pIValueUSD', headerName: 'PI Value USD' },
        { field: 'pIValueINR', headerName: 'PI Value INR' },

        { field: 'noOfContainer', headerName: 'No Of Container' },
        { field: 'eCGCLimit', headerName: 'ECGCLimit' },
        { field: 'palletisationStatus', headerName: 'Palletisation Status' },
        { field: 'packingMark', headerName: 'Packing Mark' },
        { field: 'dispatchDateInERP', headerName: 'Dispatch Date In ERP' },

        { field: 'dispatchDateProduction', headerName: 'Dispatch Date Production' },
        { field: 'containerPlacingDate', headerName: 'Container Placing Date' },
        { field: 'saleOrderStatus', headerName: 'Sale Order Status' },
        { field: 'paymentTerm', headerName: 'Payment Term' },
        { field: 'remark', headerName: 'Remark' },
    ];
    useEffect(() => {
        exportsList.map(x => {
            return { ...pendingExportSample, ...x };
        });
    }, []);
    var a = 0;
    return (
        <>
            <div>
                <Container className="pt-4">
                    <h1> <Badge variant="secondary">Pending Exports</Badge>{' '} </h1>
                    <hr></hr>
                </Container>
            </div>
            <Container>
                <div className="px-3 py-3" >
                    <Button variant="info" onClick={(e) => { addPendingExport() }} > <h4> <Badge variant="info">Add Pending Export</Badge>{' '} </h4> </Button>
                </div>
            </Container>
            <Container>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {columns.map(x => {
                                    a++;
                                    return <TableCell key={x.headerName} align="right" style={{ width: '20% !important' }} >{x.headerName}</TableCell>
                                })}
                                <TableCell align="right" key={`editAction${a}`} >Edit Action</TableCell>
                                <TableCell align="right" key={`deleteAction${a}`} >Delete Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {exportsList.map(row => (
                                <TableRow key={row.id}>
                                    {Object.keys(pendingExportSample).map(objKey => {
                                        return <TableCell align="right" key={objKey}>
                                            {row[objKey]}
                                        </TableCell>
                                    })}
                                    <TableCell align="right">
                                        <Button aria-label="edit" onClick={() => handleEdit(row)}>
                                            <i className="fas fa-edit"></i>
                                        </Button>
                                    </TableCell>

                                    <TableCell align="right">
                                        <Button aria-label="delete" onClick={() => handleDelete(row)}>
                                            <i className="fas fa-trash-alt"></i>
                                        </Button>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
}

export default PendingExportList;
