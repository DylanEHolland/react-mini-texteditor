import baseObject from '../../baseObject';
import EditableLine from '../EditableLine';


export default class TextEditor extends React.Component {
    render = () => {
        return (
            <TestComponent />
        )
    }
}

class TestComponent extends baseObject {

}

// export default class TextEditor extends React.Component {
//     state = {
//         lines: null,
//         inputBuffers: [],
//         syncing: false
//     };

//     // componentDidMount() {
//     //     let {lines} = this.props;
//     //     if(!lines) {
//     //         lines = 1;
//     //     }

//     //     // this.setState({
//     //     //     lines: lines
//     //     // })
//     // }

//     render = () => {
//         let {syncing, lines} = this.state;
        

//         if(syncing) {
//             return null;
//         }

//         return (
//             <div>
//                 <EditableLine />
//             </div>
//         );
//     }
// }