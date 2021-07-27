import React, { Component } from 'react'
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allData: [],
            show: false
        }
    }

    componentDidMount = async () => {
        try {
            const axiosget = await axios.get('http://localhost:8080/retreive')
            const assigndata = axiosget.data

            this.setState({
                allData: assigndata,
                show: true
            })
            console.log(this.state.allData)
            
        } catch { console.log('error') }
    }

    createFAV = async (e, item) => {
        e.preventDefault();
        const bodyData = {
            id: item.id,
            title: item.title,
            description: item.description,
            ingredients: item.ingredients,
            image_url: item.image_url,
            
        }
        await axios.post('http://localhost:8080/create', bodyData)
    }




    render() {
        console.log(this.state.allData)
        return (
            <div>
                {
                    this.state.show &&
                    this.state.allData.map((item) => {
                        return (
                            <Card style={{ width: '18rem',
                            display:'inline-block',
                            margin:'15px'
                            
                            }}>
                                <Card.Img variant="top" src={item.image_url} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Card.Title>{item.ingredients}</Card.Title>
                                    <Button variant="primary" onClick={(e) => this.createFAV(e,item)}>add to FAV</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}

export default Home
