import { useSelector } from "react-redux"

export default function Profile() {
  const { currentUser } = useSelector(state => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl font-semibold text-center my-7'>{currentUser.name} Profile</h1>
      <form className="flex flex-col gap-3">
        <input type="text" placeholder="Username" className="border p-3 rounded-lg outline-none" id="username" />
        <input type="email" placeholder="Email" className="border p-3 rounded-lg outline-none" id="email" />
        <input type="password" placeholder="Password" className="border p-3 rounded-lg outline-none " id="password" />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">Update</button>
      </form>
      <div className="flex justify-between mt-5">
          <span className="text-red-700 cursor-pointer hover:opacity-95">Delete Account</span>
          <span className="text-red-700 cursor-pointer hover:opacity-95">Sign Out</span>
      </div>
    </div>
  )
}
