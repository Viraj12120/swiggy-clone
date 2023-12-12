const Contact=()=>{
    return (
    <div>
    <div className="flex flex-col items-center justify-center h-screen light">
  <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>

    <form className="flex flex-col">
      <input placeholder="Enter your email address" class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email"/>

      <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Subscribe</button>
    </form>

    <div className="flex justify-center mt-4">
      <a className="text-sm text-gray-600 hover:underline" href="#">Privacy Policy</a>
    </div>
  </div>
</div>

    
    
    
    
    </div>);
};
export default Contact;