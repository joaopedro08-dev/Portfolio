import Footer from "./components/app/footer"
import Header from "./components/app/header"
import Main from "./components/app/main"
import ButtonUp from "./components/button-up"

export function App() {
  return (
    <div className="w-full min-h-dvh overflow-x-hidden flex flex-col pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
      <Header />
      <Main className="pt-16" />
      <Footer />
      <ButtonUp />
    </div>
  )
}

export default App
