import React from "react";

export default class Scroll extends React.Component {
    state = {newsArr: []}
    scrollRef = React.createRef()

    componentDidMount() {
        this.timer = setInterval(() => {
            const {newsArr} = this.state
            let news = '新闻' + (newsArr.length + 1)
            newsArr.unshift(news)
            this.setState({newsArr: newsArr})
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return this.scrollRef.current.scrollHeight
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.scrollRef.current.scrollTop += this.scrollRef.current.scrollHeight - snapshot
    }

    render() {
        const useStyle = {
            scrollStyle: {
                height: '150px',
                width: '100px',
                overflow: 'auto',
                backgroundColor: 'green'
            },
            item: {
                height: '30px'
            }
        }
        const {newsArr} = this.state
        const listItem = newsArr.map((each, index) => {
            return <div style={useStyle.item} key={index}>{each}</div>
        })
        return (
            <div style={useStyle.scrollStyle} ref={this.scrollRef}>
                {listItem}
            </div>
        )
    }
}
