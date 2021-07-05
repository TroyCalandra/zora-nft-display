import React from 'react';
import './ComponentOne.css';

export default class ComponentOne extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        }
    }
    getContractBinary = async () => {
        try {
            const response = await fetch('/api/health');
            const json = await response.json();
            this.setState({message: json.message});
        } catch (error) {
            this.setState({message: 'failure'});
        }
    }

    componentDidMount() { 
        this.getContractBinary();
    }

    render() {
        return (
            <div className='bg-gray-700 flex items-center min-h-screen'>
                <div className='h-52 w-72 bg-gray-400 rounded-xl text-center flex justify-center items-center max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                    <p className='font-medium'>
                        <span className='text-gray-700'>status: </span>
                        <span className='text-green-700'>{this.state.message}</span>
                    </p>
                </div>
            </div>
        )
    }

}