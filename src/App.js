import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import AccountActivation from './pages/AccountActivation'
import AccountActivationLink from './pages/AccountActivationLink'
import EnterDetails from './pages/EnterDetails'
import FailedSignUpInComplete from './pages/FailedIncompleteSignUpComplete'
import FailedIncompleteSignUpComplete from './pages/FailedIncompleteSignUpComplete'
import FailedSignUpComplete from './pages/FailedSignUpComplete'
import ForgotPassword from './pages/ForgotPassword'
import Loading from './pages/Loading'
import Login from './pages/Login'
import MobileAppFlow from './pages/MobileAppFlow'
import SecurityCode from './pages/SecurityCode'
import SecurityQuestion from './pages/SecurityQuestion'
import SecurityQuestions from './pages/SecurityQuestions'
import SelectAccountType from './pages/SelectAccountType'
import SetPreferences from './pages/SetPreferences'
import SetUpSecurity from './pages/SetUpSecurity'
import SignUp from './pages/SignUp'
import SignUpComplete from './pages/SignUpComplete'
import UploadDocuments from './pages/UploadDocuments'

const App = () => {
  return (
    <Box bg={['white','white','black']}>
    <Header/>
    <Routes>
     <Route exact path="/" element={<SelectAccountType/>}/>
     <Route exact path="/signup" element={<SignUp/>}/>
     <Route exact path="/forgotPassword" element={<ForgotPassword/>}/>
     <Route exact path="/password-forgotten-security-questions" element={<SecurityQuestions/>}/>
     <Route exact path="/account-activation" element={<AccountActivation/>}/>
     <Route exact path="/account-activation-sent" element={<AccountActivationLink/>}/>
     <Route exact path="/set-up-security" element={<SecurityQuestion/>}/>
     <Route exact path="/set-up-security-code" element={<SecurityCode/>}/>
     <Route exact path="/loader" element={<Loading/>}/>
     <Route exact path="/signupcomplete" element={<SignUpComplete/>}/>
     <Route exact path="/failedsignupcomplete" element={<FailedSignUpComplete/>}/>
     <Route exact path="/failedincompletesignupcomplete" element={<FailedSignUpInComplete/>}/>
     <Route exact path="/mobileappFlow" element={<MobileAppFlow/>}/>
     <Route exact path="/login" element={<Login/>}/>
     <Route exact path="/enterdetails" element={<EnterDetails/>}/>
     <Route exact path="/setpreference" element={<SetPreferences/>}/>

     <Route exact path="/identity" element={<UploadDocuments/>}/>




    </Routes>
    <Footer/>
</Box>
    
  )
}

export default App