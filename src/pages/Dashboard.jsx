import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Dashboard() {
  const [reports, setReports] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/reports')
      .then(res => setReports(res.data))
  }, [])

  return (
    <div className="container">
      <h2>Authority Dashboard</h2>
      {reports.map(r => (
        <div key={r._id} className="card">
          <p>{r.description}</p>
          <p><b>Location:</b> {r.location}</p>
          <p><b>Priority:</b> {r.priority}</p>
        </div>
      ))}
    </div>
  )
}