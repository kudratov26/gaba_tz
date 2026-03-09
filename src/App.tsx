import { BriefcaseBusiness, Mail, Phone } from "lucide-react"

const App = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 min-h-screen">
      <div className="flex flex-col text-center gap-3">
        <h1 className="text-3xl font-bold">User Fetching</h1>
        <span className="text-slate-500">Find users and profiles</span>
      </div>
      <div className="flex justify-center px-4 mt-14">
        <input type="text" placeholder="Search users..." className="border border-slate-300 rounded-md p-2 w-1/3" />
      </div>
      {/* convert this to tailwind: grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */}
      <div className="grid justify-center grid-cols-[repeat(3,minmax(300px,1fr))] gap-4 mt-8">
        {/* Card */}
        <div className="border border-slate-300 rounded-lg shadow p-6">
          {/* Header */}
          <div className="flex items-center gap-2">
            <div className="p-6 border rounded-full">
              <img src="" alt="" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h2 className="text-[18px] font-bold">User Name</h2>
              <span className="text-slate-600 text-sm ">@mkkkdi</span>
            </div>
          </div>
          {/* Infos */}
          <div className="mt-6">
            <div className="flex items-center gap-2">
              <Mail size={16}/>
              <span>Email</span>
            </div>
            <div className="flex items-center gap-2">
              <BriefcaseBusiness size={16}/>
              <span>Skills</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16}/>
              <span>+998 99 000 99 00</span>
            </div>
          </div>
        </div>
        <div className="border border-slate-300 rounded-lg shadow p-6">
          {/* Header */}
          <div className="flex items-center gap-2">
            <div className="p-6 border rounded-full">
              <img src="" alt="" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h2 className="text-[18px] font-bold">User Name</h2>
              <span className="text-slate-600 text-sm ">@mkkkdi</span>
            </div>
          </div>
          {/* Infos */}
          <div className="mt-6">
            <div className="flex items-center gap-2">
              <Mail size={16}/>
              <span>Email</span>
            </div>
            <div className="flex items-center gap-2">
              <BriefcaseBusiness size={16}/>
              <span>Skills</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16}/>
              <span>+998 99 000 99 00</span>
            </div>
          </div>
        </div>
        <div className="border border-slate-300 rounded-lg shadow p-6">
          {/* Header */}
          <div className="flex items-center gap-2">
            <div className="p-6 border rounded-full">
              <img src="" alt="" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h2 className="text-[18px] font-bold">User Name</h2>
              <span className="text-slate-600 text-sm ">@mkkkdi</span>
            </div>
          </div>
          {/* Infos */}
          <div className="mt-6">
            <div className="flex items-center gap-2">
              <Mail size={16}/>
              <span>Email</span>
            </div>
            <div className="flex items-center gap-2">
              <BriefcaseBusiness size={16}/>
              <span>Skills</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16}/>
              <span>+998 99 000 99 00</span>
            </div>
          </div>
        </div>
        <div className="border border-slate-300 rounded-lg shadow p-6">
          {/* Header */}
          <div className="flex items-center gap-2">
            <div className="p-6 border rounded-full">
              <img src="" alt="" />
            </div>
            <div className="flex flex-col gap-0.5">
              <h2 className="text-[18px] font-bold">User Name</h2>
              <span className="text-slate-600 text-sm ">@mkkkdi</span>
            </div>
          </div>
          {/* Infos */}
          <div className="mt-6">
            <div className="flex items-center gap-2">
              <Mail size={16}/>
              <span>Email</span>
            </div>
            <div className="flex items-center gap-2">
              <BriefcaseBusiness size={16}/>
              <span>Skills</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16}/>
              <span>+998 99 000 99 00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App