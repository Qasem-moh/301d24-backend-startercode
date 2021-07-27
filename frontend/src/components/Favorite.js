import React, { Component } from 'react'
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import CoffeModel from './CoffeModel'
export class Favorite extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allData: [],
            show: false,
            showmodel: false,
            title: '',
            description: '',
            ingredients: '',
            image_url: '',
            index: ''
        }
    }

    componentDidMount = async () => {
        try {
            const axiosget = await axios.get('http://localhost:8080/fav-list')
            const assigndata = axiosget.data

            this.setState({
                allData: assigndata,
                show: true
            })

        } catch { console.log('error') }
    }


    deleteItem = async (e, idx) => {
        e.preventDefault();
        const spacficItem = await axios.delete(`http://localhost:8080/delete/${this.state.allData[idx]._id}`);
        this.setState({
            allData: spacficItem.data
        })
    }



    updateItem = async (idx) => {
        this.setState({
            showmodel: true,
            title: this.state.allData[idx].title,
            description: this.state.allData[idx].description,
            ingredients: this.state.allData[idx].ingredients,
            image_url: this.state.allData[idx].image_url,
            index: idx

        })
    }
    onclose = (e) => {
        this.setState({
            showmodel: false
        })
    }

    updatetitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    updatedescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    updateingredients = (e) => {
        this.setState({
            ingredients: e.target.value
        })
    }
    updateimage_url = (e) => {
        this.setState({
            image_url: false
        })
    }

    updateData = async (e) => {
        e.preventDefault();

        const dataBody = {
            title: this.state.title,
            description: this.state.description,
            ingredients: this.state.ingredients,
            image_url: this.state.image_url,

        }
        const updtaeURL = `http://localhost:8080/update/${this.state.allData[this.state.index]._id}`
        const axiosupdtaeURL = await axios.put(updtaeURL, dataBody)
        this.setState({
            allData: axiosupdtaeURL.data
        })

    }


    render() {
        return (
            <div>
                {
                    this.state.show &&
                    this.state.allData.map((item, idx) => {
                        return (
                            <Card style={{
                                width: '18rem',
                                display: 'inline-block',
                                margin: '15px'
                            }}>

                                
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Card.Title>{item.ingredients}</Card.Title>
                                    <Button variant="primary"
                                        onClick={(e) => this.deleteItem(e, idx)}
                                    >Delete</Button>
                                    <Button variant="primary"
                                        onClick={() => this.updateItem(idx)}
                                    >update</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
                {
                    < CoffeModel
                        showmodel={this.state.showmodel}
                        onclose={this.state.onclose}
                        title={this.state.title}
                        description={this.state.description}
                        ingredients={this.state.ingredients}
                        image_url={this.state.image_url}
                        updatetitle={this.updatetitle}
                        updatedescription={this.updatedescription}
                        updateingredients={this.updateingredients}
                        updateimage_url={this.updateimage_url}
                        updateData={this.updateData}
                    />
                }
            </div>
        )
    }
}

export default Favorite
