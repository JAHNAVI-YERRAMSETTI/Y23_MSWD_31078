import React from 'react'

const Courses = () => {
  return (
    <div>
      <table bgcolor="black" width="800" align='center'>
        <thead>
            <tr bgcolor="grey">
                <th width="100">Course Code</th>
                <th width="100">Name</th>
                <th width="100">LTPS</th>
                <th width="100">Credits</th>
            </tr>
        </thead>
        <tbody>
            <tr bgcolor="lightgrey" align="center">
                <td>23UC2202</td>
                <td>Linear Algebra</td>
                <td>3-0-2-3</td>
                <td>4</td>
            </tr>
            <tr bgcolor="lightgrey" align="center">
                <td>23UC1203</td>
                <td>MSWD</td>
                <td>0-0-2-3</td>
                <td>6</td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default Courses