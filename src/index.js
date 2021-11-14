//import the React and ReactDom libraries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

//Create a react component
const App = function () {
    // ()=>{}
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    content="Nice blog post"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00AM"
                    content="I like the subject"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 5:00PM"
                    content="I like the writing"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

//Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));

//26들을 차례
