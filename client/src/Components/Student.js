import React from 'react'

const Student = () => {
  return (
    <div>
      <table bgcolor="black" width="800" align='center'>
    <thead>
        <tr bgcolor="grey">
        <th width="100">Student ID</th>
        <th width="100">Name</th>
        <th width="100">Branch</th>
        <th width="100">Year</th>
        </tr>
        </thead>
        <tbody>
            <tr bgcolor="lightgrey" align="center">
                <td>2300031078</td>
                <td>Y.jahnavi</td>
                <td>CSE</td>
                <td>2nd</td>
            </tr>
            <tr bgcolor="lightgrey" align="center">
                <td>2300032530</td>
                <td>U.Tejaswi</td>
                <td>CSE</td>
                <td>2nd</td>
            </tr>
            <tr bgcolor="lightgrey" align="center">
                <td>2300030419</td>
                <td>M.Likhil</td>
                <td>CSE</td>
                <td>2nd</td>
            </tr>
            <tr bgcolor="lightgrey" align="center">
                <td>2300031735</td>
                <td>B.Kavya</td>
                <td>CSE</td>
                <td>2nd</td>
            </tr>
            <tr bgcolor="lightgrey" align="center">
                <td>2300035830</td>
                <td>K.Sekhar</td>
                <td>CSE</td>
                <td>2nd</td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default Student