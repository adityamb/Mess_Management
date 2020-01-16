import React, { Component } from 'react'
import BillDetails from './BillDetails'
import './bill.css'
import Navbar from '../layout/Navbar'

export class Bill extends Component {
    render() {
        return (
            <div>
                <Navbar />
                
                <h3 className="center white-text">Bill</h3>
               <BillDetails /> 
            </div>
        )
    }
}

export default Bill
