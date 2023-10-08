import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import axios from "axios"
import { updateUserStart, updateUserFailure, updateUserSuccess, deleteStart, deleteFailure, deleteSuccess } from "../slices/userSlice.js";
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export default function Profile() {
  const { currentUser, loading } = useSelector(state => state.user);
  const [formData, setFormData] = useState({})
  // console.log(formData);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateUserStart())
    try {
      const res = await axios.post(`/api/user/update/${currentUser._id}`, {
        ...formData
      })
      // console.log(res.data);
      if (res.success === false) {
        toast.error(res.message);
        dispatch(updateUserFailure())
        return
      } else {
        dispatch(updateUserSuccess(res.data))
        toast.success("Profile Updated!");
      }

    } catch (error) {
      toast.error(error.message);
      dispatch(updateUserFailure())
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    dispatch(deleteStart());
    try {
      if (window.confirm("Are you sure?")) {
        const res = await axios.delete(`/api/user/delete/${currentUser._id}`)
        console.log(res);
        // console.log(res.data);
        if (res.success === false) {
          toast.error(res.message);
          dispatch(deleteFailure());
          return
        } else {
          toast.success(res.data);
          dispatch(deleteSuccess());
          navigate("/sign-in")
        }
      }

    } catch (error) {
      toast.error(error.message);
      dispatch(deleteFailure())
    }
  }


  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl font-semibold text-center my-7'>{currentUser.name} Profile</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input value={formData.username} defaultValue={currentUser.name} type="text" placeholder="Username" className="border p-3 rounded-lg outline-none" id="username" onChange={handleChange} />
        <input value={formData.email} defaultValue={currentUser.email} type="email" placeholder="Email" className="border p-3 rounded-lg outline-none" id="email" onChange={handleChange} />
        <input type="password" placeholder="Password" className="border p-3 rounded-lg outline-none " id="password" onChange={handleChange} />
        <button disabled={loading} className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">{loading ? "Updating..." : "Update"}</button>
      </form>
      <div className="flex justify-between mt-5">
        <span onClick={handleDelete} className="text-red-700 cursor-pointer hover:opacity-95">Delete Account</span>
        <span className="text-red-700 cursor-pointer hover:opacity-95">Sign Out</span>
      </div>
    </div>
  )
}
