import { UserButton } from '@clerk/nextjs'

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="h-screen w-screen relative">
        <aside className="absolute top-0 w-[200px] left-0 h-full border-r border-black/10">
          Mood
        </aside>
        <div className="ml-[200px] h-full">
          <header className="h-[60px] border-b border-black/10">
            <div className="h-full w-full flex px-6 items-center justify-end">
              <UserButton />
            </div>
          </header>
          <div className="h-[calc(100vh-60px)]">{children}</div>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
