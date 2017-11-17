import React, { Component } from 'react';

function NumberList(props) {
    const numbers = props.numbers;

    const listItems = numbers.map((number,index) =>
        <li key={index}>{number}</li>
        // 如果列表可以重新排序，我们不建议使用索引来进行排序，因为这会导致渲染变得很慢
    );
    return (
        <ul>{listItems}</ul>
    );
}

class List extends Component {
    render() {
        const numbers = [1,1, 2, 3, 4, 5];
        return (
            <NumberList numbers={numbers} />
        );
    }
}

export default List;