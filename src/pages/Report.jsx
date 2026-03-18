import { useState } from 'react'
import axios from 'axios'

export default function Report() {
  const [form, setForm] = useState({
    description: '',
    location: '',
    priority: 'low',
    media: null
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFile = (e) => {
    setForm({ ...form, media: e.target.files[0] })
  }

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = `${pos.coords.latitude}, ${pos.coords.longitude}`
      setForm({ ...form, location: coords })
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData()
    Object.keys(form).forEach(key => data.append(key, form[key]))

    try {
      await axios.post('http://localhost:5000/api/report', data)
      alert('Report submitted anonymously')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="container">
      <h2>Submit Report</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          name="description"
          placeholder="Describe incident"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />

        <button type="button" onClick={getLocation}>
          Use Current Location
        </button>

        <select name="priority" onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <input type="file" onChange={handleFile} />

        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  )
}
