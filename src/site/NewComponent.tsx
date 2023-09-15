type NewComponentPropsType = {
    topCars: topCarsType[]
}

type topCarsType = {
    manufacturer: string,
    model: string
}
export const NewComponent = (props: NewComponentPropsType) => {



    // const rows = props.topCars.map((objectFromCarArray, index) => {
    //     return (
    //         <tr key={objectFromCarArray.manufacturer}>
    //             <td>{objectFromCarArray.manufacturer}</td>
    //             <td>{objectFromCarArray.model}</td>
    //         </tr>
    //     )
    // });



        return (
            <table>
                <thead>
                <tr>
                    <td>Марка</td>
                    <td>Модель</td>
                </tr>
                </thead>
                <tbody>
                {props.topCars.map((objectFromCarArray) => <tr key={objectFromCarArray.manufacturer}>
                                 <td>{objectFromCarArray.manufacturer}</td>
                                 <td>{objectFromCarArray.model}</td>
                             </tr>
                         )
                     }
                </tbody>
            </table>
        )

};


// <ul>
//     {props.topCars.map((objectFromCarArray, index) => {
//         return (
//             <li key={objectFromCarArray.manufacturer}>
//                 <span>{objectFromCarArray.manufacturer}</span>
//                 <span> model: {objectFromCarArray.model}</span>
//             </li>
//         )
//     })}
// </ul>