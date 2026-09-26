import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane
} from "react-icons/fa";


function Contact() {


return (

<div className="min-h-screen bg-slate-50">


<Header />



{/* Hero Section */}

<section className="
bg-gradient-to-br
from-slate-950
via-blue-950
to-indigo-900
py-24
px-6
text-white
">


<div className="
max-w-5xl
mx-auto
text-center
">


<h1 className="
text-5xl
md:text-6xl
font-extrabold
">

Let's Connect With 
<span className="text-blue-400">
 CareerPrep Hub
</span>

</h1>



<p className="
mt-6
text-gray-300
text-lg
">

Have questions about interview preparation?
Our team is ready to help you.

</p>


</div>


</section>







{/* Contact Section */}


<section className="
py-20
px-6
">


<div className="
max-w-6xl
mx-auto
grid
lg:grid-cols-3
gap-8
">





{/* Contact Info */}


<div className="
bg-white
rounded-3xl
shadow-xl
p-8
">


<h2 className="
text-3xl
font-bold
text-gray-800
">

Get In Touch

</h2>



<p className="
text-gray-500
mt-3
">

We would love to hear from you.

</p>





<div className="
mt-8
space-y-6
">



<div className="
flex
items-center
gap-4
">


<div className="
bg-blue-100
text-blue-600
p-4
rounded-full
">

<FaEnvelope/>

</div>


<div>

<h3 className="font-semibold">
Email
</h3>

<p className="text-gray-500">
support@careerprephub.com
</p>

</div>


</div>






<div className="
flex
items-center
gap-4
">


<div className="
bg-green-100
text-green-600
p-4
rounded-full
">

<FaPhone/>

</div>


<div>

<h3 className="font-semibold">
Phone
</h3>

<p className="text-gray-500">
+91 98765 43210
</p>

</div>


</div>







<div className="
flex
items-center
gap-4
">


<div className="
bg-purple-100
text-purple-600
p-4
rounded-full
">

<FaMapMarkerAlt/>

</div>


<div>

<h3 className="font-semibold">
Location
</h3>

<p className="text-gray-500">
India
</p>

</div>


</div>




</div>





<div className="
mt-10
bg-blue-50
rounded-2xl
p-5
">


<div className="
flex
items-center
gap-3
text-blue-700
font-bold
">

<FaClock/>

Working Hours

</div>


<p className="
mt-3
text-gray-600
">

Monday - Friday

</p>


<p className="
text-gray-600
">

9:00 AM - 6:00 PM

</p>


</div>



</div>









{/* Contact Form */}


<div className="
lg:col-span-2
bg-white
rounded-3xl
shadow-xl
p-10
">


<h2 className="
text-3xl
font-bold
text-gray-800
">

Send Us A Message

</h2>



<p className="
text-gray-500
mt-3
">

Fill the form and our team will contact you shortly.

</p>




<form className="
mt-8
grid
md:grid-cols-2
gap-6
">


<div>


<label className="
font-medium
text-gray-700
">

Full Name

</label>


<input

type="text"

placeholder="Enter your name"

className="
w-full
mt-2
border
rounded-xl
px-4
py-3
outline-none
focus:ring-2
focus:ring-blue-500
"
/>


</div>





<div>


<label className="
font-medium
text-gray-700
">

Email

</label>


<input

type="email"

placeholder="Enter your email"

className="
w-full
mt-2
border
rounded-xl
px-4
py-3
outline-none
focus:ring-2
focus:ring-blue-500
"

/>


</div>





<div className="
md:col-span-2
">


<label className="
font-medium
text-gray-700
">

Subject

</label>


<input

type="text"

placeholder="Enter subject"

className="
w-full
mt-2
border
rounded-xl
px-4
py-3
outline-none
focus:ring-2
focus:ring-blue-500
"

/>


</div>






<div className="
md:col-span-2
">


<label className="
font-medium
text-gray-700
">

Message

</label>


<textarea

rows="5"

placeholder="Write your message"

className="
w-full
mt-2
border
rounded-xl
px-4
py-3
outline-none
focus:ring-2
focus:ring-blue-500
"

/>


</div>







<div className="
md:col-span-2
">


<button

className="
flex
items-center
gap-3
bg-blue-600
hover:bg-blue-700
text-white
px-8
py-3
rounded-xl
font-semibold
transition
shadow-lg
">


<FaPaperPlane/>

Send Message


</button>


</div>




</form>


</div>



</div>


</section>






<Footer />


</div>

);


}


export default Contact;