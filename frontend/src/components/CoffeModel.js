import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
export class CoffeModel extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.showmodel} onHide={this.props.onclose}>
                    <Form onSubmit={e => this.props.updateData(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Update title</Form.Label>
                            <Form.Control type="text" placeholder="Enter new title"
                                onChange={this.props.updatetitle} value={this.props.title} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Update description</Form.Label>
                            <Form.Control type="text" placeholder="Enter new title"
                                onChange={this.props.updatedescription} value={this.props.description} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Update ingredients</Form.Label>
                            <Form.Control type="text" placeholder="Enter new title"
                                onChange={this.props.updateingredients} value={this.props.ingredients} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Update image_url</Form.Label>
                            <Form.Control type="text" placeholder="Enter new title"
                                onChange={this.props.updateimage_url} value={this.props.img} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            update
                        </Button>
                    </Form>
                </Modal>
            </>
        )
    }
}

export default CoffeModel
