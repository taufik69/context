import React, { useState } from 'react'
import Header from './Components/Header'
import Banner from './Components/Banner'
import About from './Components/About'
import Client from './Components/Client'
import Footer from './Components/Footer'
import Button from './Components/Common/Button'
import Formatter from './Components/Common/Formatter'
import { ThemeProvider } from './Context/ThemeContext'

const App = () => {
  let [visible, setvisble] = useState(true);
  const [value, setvalue] = useState('')
  const handleVisible = (value) => {
    setvalue(value);
    setvisble(!visible)
  }

  return (
    <>
      <ThemeProvider>
        <Header onVisble={handleVisible} />
        <Banner >
          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <Button >
              <Formatter color={value} visible={visible}>
                Explore It More

              </Formatter>
            </Button >
            <Button >
              <Formatter color="blue" visible={visible}>
                Shop  More
              </Formatter>
            </Button >
          </div>
        </Banner>
        < About />

        <Client />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App