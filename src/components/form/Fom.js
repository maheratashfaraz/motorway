import React from 'react';
import { validateTextInput } from '../helper/validateTextInput'
import { validateEmail } from '../helper/validateEmail'
import { formatCurrency } from '../helper/formatCurrency'
import './Form.css'

const Form = () => {
    const MaxSalary = "80000";
    const MinSalary = "30000";
    const SalaryStep = "5000"

    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [dateOfBirth, setDateOfBirth] = React.useState('')
    const [favColor, setFavColor] = React.useState("")
    const [salary, setSalary] = React.useState("30000")
    const [error, setError] = React.useState(null)

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        console.log('name is ', e.target.value)
        setEmail(e.target.value)
    }

    const handleBirthdayChange = (e) => {
        setDateOfBirth(e.target.value)
    }

    const handleColorChange = (e) => {
        setFavColor(e.target.value)
    }

    const handleSalaryChange = (e) => {
        setSalary(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('is this valid ', validateTextInput(name))
        if (name === '' || !validateTextInput(name)) {
            console.log('hey i am here ...')
            setError({ type: 'name', message: 'Enter valid name' })
        }
        else if (favColor === '' || !validateTextInput(favColor)) {
            setError({ type: 'color', message: 'Enter valid colour' })
        }
        else if (!validateEmail(email)) {
            setError({ type: 'email', message: 'Enter valid email' })
        }
        else {
            setError(null)
            alert('form is submitted')
        }

    }

    return (<form class='form' onSubmit={handleSubmit}>
        <label for="fname">Name:</label><br />
        <input type="text" value={name} onChange={handleNameChange} /><br />
        {error && error.type === 'name' && <p class='error'>{error.message}</p>}

        <label for="lname">Email:</label><br />
        <input type="text" value={email} onChange={handleEmailChange} /><br />
        {error && error.type === 'email' && <p class='error'>{error.message}</p>}

        <label for="lname">Date of birth:</label><br />
        <input type="date" value={dateOfBirth} onChange={handleBirthdayChange} /><br />

        <label for="lname">Favourite colour:</label><br />
        <input type="text" value={favColor} onChange={handleColorChange} /><br />
        {error && error.type === 'color' && <p class='error'>{error.message}</p>}

        <label for="lname">Salary: {formatCurrency(salary, 0)}</label><br />
        <input type="range" list="tickmarks" value={salary} min={MinSalary} max={MaxSalary} step={SalaryStep} onChange={handleSalaryChange} /><br />
        <input type="submit" /><br />
    </form>)
}


export default Form