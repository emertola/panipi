import React, { Component } from 'react';

import {Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';


class AppList extends Component {
    

    render() {
        const {lists, onFavorite} = this.props;

        return (
        <div>
            <ListGroup>
                {
                    lists.map((list) => {
                        return (
                            <ListGroupItem key={list.id}>
                                <h4><em>"{list.content}"</em></h4>
                                <h5>-- {list.reference}</h5>
                                { list.favorite ? <span onClick={() => onFavorite(list.id)} className="glyphicon glyphicon-heart favorite like-custom pull-right"></span> : <span onClick={() => onFavorite(list.id)} className="glyphicon glyphicon-heart like-custom pull-right"></span>}
                                <div className="clearfix"></div>
                            </ListGroupItem>
                        )
                    })
                }
            </ListGroup>    
        </div>
        );
    }
}

export default AppList;
