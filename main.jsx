import React from "react";
import $ from "jquery";
// /main
var Main = React.createClass({
    // 初始化数据为空
    getInitialState() {
        return {
            data: []
        }
    },
    // 切记bind(this);
    componentDidMount() {
        $.get(
            "./athlete.json",
            "json",
            function (data) {
                this.setState({
                    data: data
                })
            }.bind(this)
        );
    },
    render() {
        var result = this.state.data.map(function (r) {
            return (
                <a href={"#/home/" + r.id} key={r.id}>
                    <div className="col-sm-4 col-xs-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="panel-title">
                                    {r.id}
                                </div>
                            </div>
                            <div className="panel-body">
                                <p>姓名: {r.name}</p>
                                <p>职位: {r.position}</p>
                            </div>
                        </div>
                    </div>
                </a>
            )
        });
        return (
            <div className="container">
                <div className="row">
                    {result}
                </div>
            </div>
        )
    }
});
export default Main;