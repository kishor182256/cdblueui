import React from 'react'
import { Step, Stepper } from 'react-form-stepper'
const StepUpForm = () => {
  return (
    <Stepper activeStep={1} color='black' width='50%' >
  <Step label="Children Step 1" bg='blue'>1</Step>
  Account
  <Step label="Children Step 1" activeBgColor='green'>2</Step>
  <Step label="Children Step 1">3</Step>
  <Step label="Children Step 1">4</Step>
  <Step label="Children Step 1">5</Step>
  </Stepper>
  )
}

export default StepUpForm