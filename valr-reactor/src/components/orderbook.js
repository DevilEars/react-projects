import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

//  "side": "sell",
//  "quantity": "0.00004571",
//  "price": "718112",
//  "currencyPair": "BTCZAR",
//  "orderCount": 1

const OrderBook = (props) => {

    return (
        <>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Asks
                        </TableCell>
                        <TableCell>
                            Bids
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.data.map((ask, index) => (
                    <TableRow>
                        <TableCell>
                            {ask.side}
                        </TableCell>
                        <TableCell>
                            {ask.quantity}
                        </TableCell>
                        <TableCell>
                            {ask.price}
                        </TableCell>
                        <TableCell>
                            {ask.currencyPair}
                        </TableCell>        
                    </TableRow>
			))}
                </TableBody>
            </Table>
        </TableContainer>
        
{/* 
        {askData.map((ask, index) =>(
            <div>
                <p>
                    {ask.currencyPair}
                </p>
            </div>
        ))} */}
        </>
    );
};

export default OrderBook;