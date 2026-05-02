import Footer from "./components/app/footer"
import Header from "./components/app/header"
import Main from "./components/app/main"

export function App() {
  return (
    <div className="w-full min-h-dvh overflow-hidden flex flex-col pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
      <Header />
      <Main className="pt-16" />
      <Footer />
    </div>
  )
}

export default App