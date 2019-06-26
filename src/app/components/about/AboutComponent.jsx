import React, { Component } from 'react';

// const AboutComponent = () => (
//     <div>
//         <h1 className="text-info">About Component</h1>
//         <h4 className="text-warning">This is a simple, React Routing Application</h4>
//     </div>
// );

const AboutComponent = () => {
    console.log(this);
    return (
        <div>
            <h1 className="text-info">About Component</h1>
            <h4 className="text-warning">This is a simple, React Routing Application</h4>
        </div>
    );
}

// class AboutComponent extends Component {
//     render() {
//         return (
//             <div>
//                 <h1 className="text-info">About Component</h1>
//                 <h4 className="text-warning">This is a simple, React Routing Application</h4>
//             </div>
//         );
//     }
// }

export default AboutComponent;