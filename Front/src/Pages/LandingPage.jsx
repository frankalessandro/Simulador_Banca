import { TopNavbar } from '../Components/LandingPage/TopNavbar/TopNavbar'
import { MainContainer } from '../Components/LandingPage/Main Container/MainContainer'
import { Footer } from '../Components/LandingPage/Footer/Footer'
import { Banner } from '../Components/LandingPage/Banner/Banner'
// Modern landing: carousel removed for a cleaner, focused hero
import { InfoTabs } from '../Components/LandingPage/Tabs/InfoTabs'


export const LandingPage = () => {

  return (
    <>
      <TopNavbar />
      <div className="bg-lightGray min-h-screen">
        <Banner />
        <MainContainer />
        <InfoTabs />
        <Footer />
      </div>
    </>
  )
}
