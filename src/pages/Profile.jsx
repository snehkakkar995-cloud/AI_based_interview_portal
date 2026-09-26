import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  useUpdateProfileMutation,
  useGetProfileQuery
} from "../services/userApi";


import { FaArrowLeft, FaCamera, FaUserCircle, FaUser, FaEnvelope, } from "react-icons/fa";

function Profile() {

const navigate = useNavigate();

const fileInputRef = useRef(null);
const {
data:profile
}=useGetProfileQuery();

const [
updateProfile
]=useUpdateProfileMutation();
const [profileImage,setProfileImage]=useState(null);
const [imageFile,setImageFile]=useState(null);
const [formData,setFormData]=useState({
firstName:"",
lastName:"",
email:""
});
// Load Existing Profile
useEffect(()=>{
if(profile){
setFormData({
firstName:profile.firstName || "",
lastName:profile.lastName || "",
email:profile.email || profile.emailId || ""
});
if(profile.profileImage){
setProfileImage(
`data:image/png;base64,${profile.profileImage}`
);
}
}
},[profile]);

// Image Upload
const handleImageUpload=(e)=>{
const file=e.target.files[0];
if(file){
setImageFile(file);
setProfileImage(
URL.createObjectURL(file)
);
}
};
// Input Change
const handleChange=(e)=>{
setFormData({
...formData,
[e.target.name]:e.target.value
});

};
// Save Profile
const handleSubmit=async(e)=>{
e.preventDefault();
try{
const data=new FormData();
data.append(
"FirstName",
formData.firstName
);
data.append(
"LastName",
formData.lastName
);
if(imageFile){
data.append(
"Image",
imageFile
);

}
const res =
await updateProfile(data).unwrap();
alert(
res.message ||
"Profile Updated Successfully"
);

}
catch(error){
console.log(error);
alert(
"Profile update failed"
);
}
};
return(
<div className="
min-h-screen
bg-gray-100
flex
justify-center
items-center
p-6
">
<div className="
w-full
max-w-5xl
bg-white
rounded-2xl
shadow-xl
px-10
py-6
">
<button

onClick={()=>navigate("/dashboard")}

className="
flex
items-center
gap-2
bg-blue-600
text-white
px-5
py-2
rounded-lg
mb-5
hover:bg-blue-700
">
<FaArrowLeft/>
Back
</button>
<h1 className="
text-3xl
font-bold
text-center
mb-6
">
Edit Profile
</h1>
<div className="
grid
md:grid-cols-3
gap-8
items-center
">
{/* Image */}
<div className="
flex
justify-center
">
<div className="relative">
{ profileImage ?
<img src={profileImage}
alt="profile"
className="
w-32
h-32
rounded-full
object-cover
border-4
border-blue-600
"/> :

<FaUserCircle

className="
w-32
h-32
text-gray-400
" />

}
<button
type="button"
onClick={()=>fileInputRef.current.click()}
className="
absolute
bottom-1
right-1
bg-blue-600
text-white
p-3
rounded-full
" >
<FaCamera/>
</button>
<input
type="file"
ref={fileInputRef}
onChange={handleImageUpload}
className="hidden"
accept="image/*" />
</div>
</div>
{/* Form */}
<div className="md:col-span-2">
<form
onSubmit={handleSubmit}
className="space-y-4" >
<div>
<label>
First Name
</label>
<div className="
flex
items-center
border
rounded-lg
px-3 ">
<FaUser/>
<input
name="firstName"
value={formData.firstName}
onChange={handleChange}
className="
w-full
p-3
outline-none
" />
</div>
</div>
<div>
<label> Last Name </label>
<div className="
flex
items-center
border
rounded-lg
px-3
">
<FaUser/>
<input
name="lastName"
value={formData.lastName}
onChange={handleChange}
className="
w-full
p-3
outline-none "/>
</div>

</div>

<div>
<label> Email </label>
<div className="
flex
items-center
border
rounded-lg
px-3
bg-gray-100
">
<FaEnvelope/>
<input
value={formData.email}
readOnly
className="
w-full
p-3
bg-transparent
outline-none
"/>
</div>
</div>
<button
className="
w-full
bg-gradient-to-r
from-blue-600
to-indigo-700
text-white
py-3
rounded-lg
font-semibold " >
Save Profile </button>
</form>
</div>
</div>
</div>
</div>
);

}
export default Profile;