import React from 'react'
const Faculty = () => {
  return (
    <div>
      <table bgcolor="black" width="800" align='center'>
        <thead>
            <tr bgcolor="grey">
                <th width="100">Faculty ID</th>
                <th width="100">Name</th>
                <th width="100">Branch</th>
                <th width="100">Year</th>
            </tr>
        </thead>
        <tbody>
            <tr bgcolor="lightgrey" align="center">
                <td>1034</td>
                <td>Dr.V.Murali Mohan</td>
                <td>Professor</td>
                <td>CSE</td>
            </tr>
            <tr bgcolor="lightgrey" align="center">
                <td>1036</td>
                <td>Dr.P.Siva Kumar</td>
                <td>Professor</td>
                <td>CSE</td>
            </tr>
            <tr bgcolor="lightgrey" align="center">
                <td>1038</td>
                <td>Dr.T.Srinivas Rao</td>
                <td>Professor</td>
                <td>CSE</td>
            </tr>
        </tbody>         
    </table>
    </div>
  )
}

export default Faculty